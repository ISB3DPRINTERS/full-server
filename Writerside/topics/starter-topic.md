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
