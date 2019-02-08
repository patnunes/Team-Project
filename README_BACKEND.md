# Backend Branch
  Note that throughout this document the `>` at the beginning of the code blocks
  just indicates that the command is being run in the terminal, and should not
  be typed into the terminal. Any `>`s in the rest of the command should be
  inserted as shown.

## Required Software:
- Python 3.7.2 (install manually)
- Django 2.1.5 (install using pip, instructions below)
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
