# Three-Level Face Recognition and Pattern Lock Authentication System

## Overview

Welcome to our Three-Level Authentication System! This project combines cutting-edge security with user-friendly features. Whether you're protecting your secret files or just your cat photos, we've got you covered.

The most commonly used type of password for security purposes is text-based. However, these passwords can be easily compromised, putting personal data at risk. With the rise in cybercrime, login and access security threats have become a major concern. To enhance security, we’ve developed a Three-Level Password Authentication system. This system includes three levels of logins, each with a different type of password: Passphrase, Face Recognition, and Pattern lock. As users progress through the levels, the password complexity increases, ensuring more secure access. This Web-based Three-Level Authentication System helps users safeguard their data from hackers and cyber threats.

## INTRODUCTION
In today’s digital landscape, ensuring robust security for user data and system access is paramount. Traditional text-based passwords, while widely used, are susceptible to breaches. As cybercrime continues to evolve, novel authentication methods are essential to safeguard sensitive information.
Our proposed Three-Level Authentication System addresses these concerns by combining three distinct layers of security. During user registration, individuals set up a three-tiered password system:
### 1.	Conventional Password (Level 1):
•	Users create a text-based password during registration.
•	This level serves as the baseline authentication method.
•	The system verifies the entered password against stored data in the database.

### 2.	Facial Recognition (Level 2):
•	Leveraging advanced biometric technology, users associate their face with their account.
•	During login, the system captures and analyzes facial features.
•	Successful recognition grants access to the next level.
### 3.	Graphical Password (Level 3):
•	Users define a unique pattern (e.g., drawing on a grid) as their third-level password.
•	The pattern lock adds an additional layer of complexity.
•	Successful pattern matching completes the authentication process.

Our proposed Three-Level Face Recognition and Pattern Lock Authentication System significantly enhances security while maintaining user-friendliness. By incorporating three distinct levels of authentication, we address vulnerabilities such as Man-in-the-Middle attacks and Brute-force attacks. A three-level security system is a time-consuming approach since the user needs to enter details carefully at first level, and second level can only be passes by the user itself because the system detects the face using camera and at last, the user can add any pattern lock for its final level Authentications. The main objective of this project is to improve system security based on extensive research. Three levels of authentication offer more robust protection compared to one or two levels. Users enter critical details and log in securely across all three levels.

## Features
1. **Passphrase Level:**
   - Users create unique passphrases (sentences or word combinations) during registration.
   - Passphrases are securely hashed and stored in the database.
   - During login, users validate their passphrases.

2. **Face Recognition Level:**
   - Users capture their faces using a webcam during registration.
   - The system uses the **Face IO API Premium** for facial feature extraction and verification.
   - Real-time face recognition ensures accurate user identification during login.

3. **Pattern Lock Level:**
   - Users draw personalized patterns on a grid during registration.
   - The system stores and validates patterns.
   - Patterns offer a visually engaging alternative to traditional passwords.

## Technologies Used
- **Languages**: PHP, HTML, CSS, JavaScript
- **Database**: MySQL
- **Web Server**: Apache
- **Face Recognition API**: Face IO API Premium
- **Development Environment**: XAMPP

## Setup Instructions
1. Install XAMPP and set up the Apache web server.
2. Create a MySQL database and configure the connection in the PHP files.
3. Upload the project files to the web server directory.
4. Register users with passphrases, facial references, and patterns.
5. Test the system by logging in using different authentication methods.

## Future Enhancements
- Implement additional biometric factors (e.g., fingerprint recognition).
- Explore adaptive authentication based on user behavior.
- Enhance the user interface for a seamless experience.
- Enhance UI/UX of the project design

## Contributors

- ADITYA MANWATKAR (https://github.com/Aditya-Manwatkar)
- SHRUTI DHOTE 
### Feel free to contribute, report issues, or provide feedback!
