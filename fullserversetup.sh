#! /bin/bash

echo "Copyright 2023 Ravinder Olivier Singh Dadiala"
echo ""
echo " Licensed under the Apache License, Version 2.0 (the "License");"
echo " you may not use this file except in compliance with the License."
echo " You may obtain a copy of the License at"
echo ""
echo "    http://www.apache.org/licenses/LICENSE-2.0 "
echo ""
echo " Unless required by applicable law or agreed to in writing, software "
echo " distributed under the License is distributed on an "AS IS" BASIS, "
echo " WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied."
echo " See the License for the specific language governing permissions and "
echo "limitations under the License. "
echo ""
echo "======================================================================="
echo "This script will setup the full server for you by doing the following:"
echo "  - Cryptography the path to the admin console"
echo "  - Check/Install NodeJS"
echo "  - Install the NPM Modules"
echo "  - Setup Supabase"
echo "  - Build the Project"
echo "  - Install and Setup Docker"
echo "  - Create the Octoprint Docker Databases"
echo "  - Start everything up"
read -p "Press y/n to continue" initialprompt
if [initialprompt = 'y']; then
    echo "Continuing"
else
    echo "Exiting"
    exit 1
fi
echo "Checking for Directory"
if [ -d "full-server" ]; then
    echo "Full-server Directory Found"
else
    echo "Full-server Directory Not Found"
    echo "Please make sure you are running this script from the root of the project"
    exit 1
fi
echo "Checking for NodeJS"
if [ -x "$(command -v node)" ]; then
    echo "NodeJS Found"
else
    echo "NodeJS Not Found"
    echo "Installing NodeJS"
    sudo apt install nodejs
fi
echo "Checking for NPM"
if [ -x "$(command -v npm)" ]; then
    echo "NPM Found"
else
    echo "NPM Not Found"
    echo "Installing NPM"
    sudo apt install npm
fi
echo "Checking for Docker"
if [ -x "$(command -v docker)" ]; then
    echo "Docker Found"
else
    echo "Docker Not Found"
    echo "Installing Docker"
    sudo apt install docker
fi
echo "Checking for Docker Compose"
if [ -x "$(command -v docker-compose)" ]; then
    echo "Docker Compose Found"
else
    echo "Docker Compose Not Found"
    echo "Installing Docker Compose"
    sudo apt install docker-compose
fi
echo "Checking for BunJS"
if [ -x "$(command -v bun)" ]; then
    echo "BunJS Found"
else
    echo "BunJS Not Found"
    echo "Installing BunJS"
    sudo npm install -g bun
fi
echo "Installing NPM Modules"
npm install 
echo "Cryptographying the path to the admin console"
