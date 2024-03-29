import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/User';
import axios from 'axios';
import { environments } from '../../environments/environments';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authState$: BehaviorSubject<any> | undefined = new BehaviorSubject(null);
  userUrl = environments.urlBackUsers;

  constructor(private cookieS: CookieService) {
    this.isUserLoggedIn().then((user) => {
      if (user) {
        this.authState$?.next(user);
      }
    });
  }

  async getUsers() {
    const res = await axios.get(this.userUrl);
    return res.data;
  }

  async login(email: string, password: string) {
    try {
      const userCredential = {
        correo: email,
        contraseñaHash: password
      }
      const user = await axios.post(`${this.userUrl}/auth`, userCredential);
      // localStorage.setItem('user', JSON.stringify(user.data));
      console.log(user.data);
      
      // quiero preguntar en el if si el json que volvio tiene un campo error
      if (user.data.error) {
        alert('No se pudo iniciar sesión no existe el usuario o la contraseña es incorrecta');
        this.authState$?.next(null);
        window.location.href = '/login';
        
        return null;
      }
      else {
        this.cookieS.set('user', JSON.stringify(user.data));
        this.authState$?.next(user.data);
        window.location.href = '/notes-list';
        return user.data;
      } 
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async register(user: User) {
    let lenght = 0;
    try {
      const users = await this.getUsers();
      if (users) {
        lenght = users.length;
        const userFound = users.find((u: User) => u.correo === user.correo);
        if (userFound) {
          alert('El email ya está registrado');
          return;
        }
      }
      try {
        const userCredential = await axios.post(`${this.userUrl}`, user);
        alert('Usuario registrado con éxito');
      } catch (error) {
        alert('No se pudo registrar el usuario');
      }
    } catch (error) {
      alert('No se pudo obtener la lista de usuarios');
    }
  }

  async logout() {
    // localStorage.removeItem('user');
    this.cookieS.delete('user');
    this.authState$?.next(null);
    window.location.href = '/notes-list';
    alert('Sesión cerrada con éxito');
  }

  async getDataActualUser() {
    try {
      const res = await fetch(`${this.userUrl}/auth`, { credentials: 'include' });
      if (res.status === 200) {
        return await res.json();
      }
      return null;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async getUserName() {
    const data = await this.getDataActualUser();
    if (data) {
      return data.nombre;
    }
  }

  async isUserLoggedIn(): Promise<User | null> {
    // const user = localStorage.getItem('user');
    const user = this.cookieS.get('user');
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  async buscarUsuarioPorId(id: number): Promise<User | null> {
    try {
      const res = await fetch(`${this.userUrl}/${id}`);
      if (res.status === 200) {
        return await res.json();
      }
      else {
        return null;
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
