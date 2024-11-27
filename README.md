# Minecraft Name Checker

Minecraft Name Checker is a Node.js and TailwindCSS-based application that automates Minecraft username availability checks and provides a web interface for manual searches.

## Features

*   Automated username availability checks at regular intervals.
*   Web interface for manual username searches.
*   Discord webhook integration for real-time updates.

## Requirements

*   Node.js v17 or higher.

## Installation

1.  Install dependencies:
    
    ```
    npm install
    ```
    
2.  Open the `server.js` file and configure your Discord webhook URL. Update line 11 with your webhook URL:
    
    ```
    
    const DISCORD_WEBHOOK_URL = 'your-webhook-url';
    const CHECK_INTERVAL = 15 * 60 * 1000; // 15 minutes
                
    ```
    
3.  Start the application:
    
    ```
    npm start
    ```
    

## Usage

*   The application will automatically check Minecraft username availability based on the configured interval.
*   Access the web interface to manually search for Minecraft usernames.

## Support

If you encounter any issues or have questions, feel free to submit an issue on the GitHub repository.


## Livedemo
You can view a livedemo at https://mcnamechecker.onrender.com/
