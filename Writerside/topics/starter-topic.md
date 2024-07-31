# Getting Started 

## Installing Dependencies

- Open terminal

- *Install NPM and PNPM*
  - ``sudo apt update && sudo apt install curl``
  - Install NVM
    - ``curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash``
    - ``wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash``
  - Close the terminal and open another one
  - Install NodeJS 22.0.0 
    - ``nvm install 22.0.0``
    - ``nvm use 22.0.0``
  - Close and reopen terminal
  - Install PNPM
    - ``npm install -g pnpm``
  - Close and reopen terminal

- *Install Docker*
  - Check to see if any conflicting older versions are installed, this command might report none of these installed.
    - ``for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done``
  - Install Docker
    - ```Shell
      # Add Docker's official GPG key:
        sudo apt-get update
        sudo apt-get install ca-certificates curl
        sudo install -m 0755 -d /etc/apt/keyrings
        sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
        sudo chmod a+r /etc/apt/keyrings/docker.asc

        # Add the repository to Apt sources:
        echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
        $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
        sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        sudo apt-get update
      
      # Install latest version of Docker:
      sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
      ```
  - Check Docker is installed correctly
    - ``sudo docker run hello-world``
    - Should give a confirmation message
    - If not troubleshoot with the information on Docker's website
  - Close and reopen the terminal

## Downloading the Code

- Open Terminal

- Check if git is installed
  - ``git``
    - Should return something
    - If it says the program isn't installed then install git
      - ``sudo apt-get update && sudo apt install git-all``

- Download the code
  - Navigate to a folder on the desktop
  - Clone the repo
    - ``git clone https://github.com/ISB3DPRINTERS/full-server``
    - ``cd full-server``

- Install the dependencies
  - ``pnpm install``

## Setup Docker

- Open terminal
- Connect printers via USB, make sure they are on
- Create the USB Rules
  - The printers need to only have access to their specified printer
  - This is done with Udev rules
    - Follow this guide's STEP TWO ONLY
      - [https://www.instructables.com/OctoPrint-for-Multiple-Printers-How-to-It-Working-/](https://www.instructables.com/OctoPrint-for-Multiple-Printers-How-to-It-Working-/)
- Create the volumes
  - ``docker volume create ender1``
  - ``docker volume create ender2``
  - ``docker volume create ender3``
  - ``docker volume create ender4``
    - Start the Octoprint instances
      - ```Shell 
        -p 5100:80   \
        -v ender1:/octoprint \
        --device /dev/ttyMINI1:/dev/ttyACM0  \
        -dit --restart unless-stopped \
        octoprint/octoprint
        ```
      - ```Shell 
        -p 5200:80   \
        -v ender2:/octoprint \
        --device /dev/ttyMINI1:/dev/ttyACM1  \
        -dit --restart unless-stopped \
        octoprint/octoprint
        ```
      - ```Shell 
        -p 5300:80   \
        -v ender3:/octoprint \
        --device /dev/ttyMINI1:/dev/ttyACM2  \
        -dit --restart unless-stopped \
        octoprint/octoprint
        ```
      - ```Shell 
        -p 5400:80   \
        -v ender4:/octoprint \
        --device /dev/ttyMINI1:/dev/ttyACM3  \
        -dit --restart unless-stopped \
        octoprint/octoprint
        ```
  - Unplug all printers and restart computer
  - Plug first printer in then run ``docker start ender1``
  - Plug second printer in then run ``docker start ender2``
  - Plug third printer in then run ``docker start ender3``
  - Plug fourth printer in then run ``docker start ender4``
  - Now the printer1 website will interact with the first printer plugged in, etc. Label your printers for ease of use.
