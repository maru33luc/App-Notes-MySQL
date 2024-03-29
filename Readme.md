# Notes App - Full Stack Implementation Exercise

This project is a web application that allows you to efficiently manage your notes. You can create, edit, archive, and filter your notes according to your needs. The implementation is divided into two phases: note creation and the application of tags and filtering.

## Features
### Phase 1: Note Creation 

- Create, Edit, and Delete Notes: You can create new notes, edit their content, and delete them as needed.
- Archive/Unarchive Notes: The ability to archive and unarchive notes allows you to organize your ideas and maintain a clean space.
- Notes Listing: Easily view your active and archived notes for quick access.

### Phase 2: Tag Application and Filtering

- Note Categories: Add categories to your notes for more advanced organization.
- Category Filtering: Filter your notes by assigned categories, making it easier to find specific information.

### Additional Functionality

- Login: Securely access the app with a login screen. (Default username/password in README.md)
- Server-Side Rendering (SSR): Implemented for more efficient initial rendering.

## Technologies Used

- **Frontend:** Angular v17, Bootstrap v5.3.2, Axios, NgBootstrap, RxJS, TypeScript
- **Backend:** Node.js with Express, Bcrypt, Cookie-parser, Cors, Dotenv, Express-session, MySQL with Sequelize ORM
- **Server-Side Rendering:** Implemented for faster initial rendering.

## Configuration

### Backend Configuration

1. Navigate to the backend folder: `cd backend`
2. Create a new file named `.env` in the `backend` folder.
3. Open the `.env` file and add the following variables, replacing the values with your own configuration:

   
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   DB_PORT=your_database_port
   DB_DIALECT=your_database_dialect (mysql, postgres, etc.)

## Running the Application

1. Clone the repository: git clone https://github.com/your-username/your-repo.git
2. Run the setup script for Windows: `script.bat`
3. Run the setup script for Mac or Linux: `script.sh`

The application is ready to be used!

## Deployed Version
Link to the deployed version on Heroku

### Acknowledgments

Thank you for reviewing this application. If you have any questions or suggestions, feel free to contact us. Enjoy managing your notes efficiently!