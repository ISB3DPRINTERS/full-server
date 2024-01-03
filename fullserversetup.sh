#! /bin/bash

echo " Copyright 2023 Ravinder Olivier Singh Dadiala"
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
sleep 1
while true; do

read -p "Do you want to proceed? (y/n) " yn

case $yn in 
	[yY] ) echo Continuing;
		break;;
	[nN] ) echo exiting...;
		exit;;
	* ) echo invalid response;;
esac

done
echo Starting...
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
echo "======================================================================="
echo "USER INTERACTION REQUIRED"
echo "======================================================================="
echo "Please enter the following information to setup the admin console"
echo "======================================================================="
echo "Please provide your Supabase URL"
read supabaseurl
echo "Please provide your Supabase Annon Key"
read supabaseannonkey
echo "Please provide an email for the maintainer of this server"
read maintaineremail
echo "Please provide a name for the maintainer of this server"
read maintainername
echo "Please provide the two letter country code of this server"
read countrycode
echo "Do you agree with the terms and conditions provided at:"
echo "https://raw.githubusercontent.com/ISB3DPRINTERS/full-server/master/src/pages/privacypolicy.js"
while true; do

read -p "Do you want to proceed? (y/n) " yn

case $yn in 
	[yY] ) echo Continuing;
		break;;
	[nN] ) echo exiting...;
		exit;;
	* ) echo invalid response;;
esac

done
echo "======================================================================="
echo "Setting up Variables"
file="/src/components/variables.js"
echo "export const supabaseurl = '$supabaseurl';" > $file
echo "export const supabaseannonkey = '$supabaseannonkey';" >> $file
echo "export const maintaineremail = '$maintaineremail';" >> $file
echo "export const maintainername = '$maintainername';" >> $file
echo "export const countrycode = '$countrycode';" >> $file

echo $path