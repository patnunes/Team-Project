# SOEN341 - Winter 2019;

## Objective(s):
 - Deploying a "Twitter-like" website containing core features which include allowing users **to post** short-messages, **to like** short-messages, and **to follow** other users. Each user will have a profile which will be created upon Signing-up; these profiles will contain general information of the user, such as their name(s), email address(es), Github username(s), etc.

 - *More features will be implemented; TBD with customer (Zhenhao Li)*

## Programming Language(s):
 -  ### Language(s)
    - Below is/are our Project's *programming language(s)*;
      - DATABASE: MySQL
      - BACKEND: Python & Django
      - FRONTEND: JavaScript

## Frontend Frameworks:
  - NPM: most recent.
    - through commandline and requiring correct installation of NPM, navigate to your local repo and execute the following
    - NOTE: this is only important if you intend to WORK on frontend, simply viewing it requires none of the following. 
      - Bootstrap v- 4.0.0  COMMAND: npm install bootstrap@4.0.0-alpha.6
      - Gulp: v- 4.0.0      COMMAND: npm install gulp@4.0.0
      - Browser-sync        COMMAND: npm install gulp browser-sync --save-dev
      - sass-conversion     COMMAND: npm install gulp-sass --save-dev
      - jquery              COMMAND: npm install jquery
      - tether              COMMAND: npm install tether


## Team Members:
- Filip Jodoin
  - Github: fjodoin
- Synneva Furuli
  - Github: Synneva
- Ricky Lopez
  - Github: rickyelopez
- Johnston Stott
  - Github: johnstonstott
- Seyedhossein Noorbakhsh
  - Github: EspressoCode
- Noah Horowitz
  - Github: Nwitz
- Jacob Guirguis
  - Github: Jacobian8
- Gurinder Dheer
  - Github: GD-DevFlow
- Patricia Nunes
  - Github: patnunes
- Mehrdad Ahmadi
  - Github: mehrdadmaskull

## Slack Workspace:
- The url for our Slack Workspace is: https://concordia-coen-beng.slack.com

# Backend Branch
  Note that throughout this document the `>` at the beginning of the code blocks
  just indicates that the command is being run in the terminal, and should not
  be typed into the terminal. Any `>`s in the rest of the command should be
  inserted as shown.

## Required Software:
- Python 3.7.2 (install manually)
- Django 2.1.5 (install using pip, instructions below)
- mysqlclient
- (probably more to come)

## Installation Instructions:

#### 1. Install Python:
  - If on Windows or Mac, download latest installer from Python website.
  -	If on linux, use whatever package manager your flavour uses
		(i.e. sudo pacman -Sy python3 python-pip)


#### 2. Set up your environment

  - We're going to be using `virtualenv` instead of the builtin `venv` because
  it seems to have more useful features.

  - Install virtualenv

	`> sudo pip install virtualenv`

	   - note that if you're on windows you should not use sudo, but instead run this in
		   an elevated command prompt
	   - also note that using sudo here isn't recommended but I can't figure out a
	     convenient way to do it without using sudo, and it isn't realy worth the time.
	     If one of you figures it out, let me know.


  - Choose a directory where you want to setup your virtual environment.
	for example, I'm setting mine up in `~\Documents\soen341\`

	go to that directory

	`> cd ~\Documents\soen341`

	and set up the environment

	`> virtualenv env`

	that creates a folder in `soen341` called `env`. That folder now contains a
	complete python3 environment. When you activate that environment, anything
	you do in python will only affect that environment (i.e. installing Django)

  - To activate your environment, go into the `env` directory and run

	`> source bin/activate`
	or on Windows
	`> Scripts\activate.bat`

	You can verify that this worked by running

	`> pip -V`

	which will give you an ouput that shows the path to the `pip` executable,
	like this:

	`naga@Iroh ~/Documents/soen341/env % pip3 -V
	pip 19.0.1 from /home/naga/Documents/soen341/env/lib/python3.7/site-packages/pip (python 3.7)`

  If the path points to the copy of pip that is inside the `env` folder
  structure, your environment is activated

	To deactivate your environment, just type `deactivate` from any directory

#### 3. Cloning the Backend branch from our repo

Now that you have your environment set up, you can clone the Backend branch
into it.

```
> cd ~/Documents/soen341/env
> mkdir Backend
> cd Backend
> git init
> git remote add origin https://github.com/SOEN341-winter2019/Team-Project.git
> git fetch
> git checkout sub-master-sprint2
```

Now if you check the contents of that directory, you'll see that it only
contains files present in the Backend branch

Your directory structure at this point should look something like this

 ```
 naga@Iroh ~/Documents/soen341 % tree -d -L 2
 .
 `-- env
     |-- Backend
     |-- bin
     |-- include
     `-- lib
 ```

If everything looks good, you're ready to install the requirements. If not,
you can try deleting the `env` folder and trying again, or you can message me
and we an try to figure it out together.


#### 4. Install requirements

Now that your environment is set up, you can install all of the requirements,
which is extremely easy! For now, the only requirement is Django, but I figure
there are going to be more. You can re-run this command in the future to make
sure your environment is up to date with the rest of the team. Every time
you `git pull` you should probably re-run this. If you are the one that adds
more requirements, you should update the requirements file so that the rest of
us can get those new requirements.

The code is as follows:

  - To install the requirements:

  `> pip install -r path/to/requirements.txt`


  - To update the `requirements.txt` if you added requirements:

  `> pip freeze > new_requirements.txt` and then merge that output file
  (very carefully please) to the existing requirements.txt file in the
  Backend branch.

#### 5. Pull Frontend Branch

Now that the Backend is set up, you'll need to have the Frontend files as well
so that Django can find the files it needs to serve to the user.

  - First, create the directory. It is very important that your folder structure
  is correct.

  ```
  > cd path/to/soen341/env
  > mkdir Frontend
  > cd Frontend
  > git init
  > git remote add origin https://github.com/SOEN341-winter2019/Team-Project.git
  > git fetch
  > git checkout whichever/frontend/branch
  ```

  Your directory structure should now look like this:

  ```
    naga@Iroh ~/Documents/soen341/env % tree -d -L 2
  .
  |-- Backend
  |   `-- tweeter
  |-- Frontend
  |   `-- src
  |-- bin
  |   `-- __pycache__
  |-- include
  |   `-- python3.7m -> /usr/include/python3.7m
  `-- lib
      `-- python3.7
  ```

  It is **critical** that your directory structure looks *exactly* like this,
  capital letters and all. The symbolic links that link Backend to Frontend
  depend on it.

  - Now to verify the symbolic links:

  Change into the tweeter directory:

  `> cd Backend/tweeter`

  if you list the contents of the folder, you should see that the "static"
  folder isn't *actually* a folder, it's a symbolic link to
  `../../Frontend/src` as shown below:

  ```
  naga@Iroh ~/Documents/soen341/env/Backend/tweeter (git)-[features/BE-62/env-test] % ls -lap
  total 24
  drwxr-xr-x 5 naga naga 4096 Feb  8 18:16 ./
  drwxr-xr-x 4 naga naga 4096 Feb 10 11:38 ../
  -rw-r--r-- 1 naga naga    0 Feb  8 09:05 db.sqlite3
  drwxr-xr-x 4 naga naga 4096 Feb  8 18:17 main_app/
  -rwxr-xr-x 1 naga naga  539 Feb  8 09:05 manage.py
  lrwxrwxrwx 1 naga naga   18 Feb  8 16:58 static -> ../../Frontend/src/
  drwxr-xr-x 2 naga naga 4096 Feb  8 16:48 templates/
  drwxr-xr-x 3 naga naga 4096 Feb  8 09:05 tweeter/
  ```

  If this all looks good, then everything should be working (ish)

#### 6. Verify Functionality

Now that everything has been cloned properly, let's verify that everything works.
If you run the Django server:

```
> cd tweeter
> python manage.py runserver
```

and then go to `127.0.0.1:8000` in your browser, it should take you to the
Tweeter homepage. The formatting might not have been fixed yet, so it might
just show up as a plain white page with all the text to the left. Don't worry
about that, it will be fixed.

If it brought you to the right page, everything should be set up properly.
