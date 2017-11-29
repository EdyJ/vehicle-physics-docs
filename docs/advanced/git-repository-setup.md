# GIT Repository Setup

Professional and Enterprise licenses include updates via GIT repositories. You may use your
credentials for browsing the repositories here:

[http://projects.edy.es/login](http://projects.edy.es/login)

##### Professional Edition

- **Vehicle Physics Pro - Professional**: complete Unity project with the SDK and examples.
- **Vehicle Physics Pro SDK**: submodule containing the SDK files only.
- **Vehicle Physics Sample Assets**: set of assets and resources for prototyping and tests.

##### Enterprise Edition

- **Vehicle Physics Pro - Enterprise**: complete Unity project with source code, examples,
	development	resources, etc.
- **Common Tools Core**: submodule with common tools and utility scripts.
- **Vehicle Physics Core**: submodule with the vehicle physics simulation scripts and components.
- **Vehicle Physics Sample Assets**: set of assets and resources for prototyping and tests.
- **Vehicle Physics Specialized Assets**: specialized vehicle support (excavators, loaders, caterpillars, etc).

!!! Info "Importing the Blender 3D models"
	Some 3D objects in the repositories are in Blender format (.blend). These models require Blender
	installed to be imported properly in Unity. [Blender site](http://blender.org)

### 1. Configure the SSH public key

The submodules are accessed via ssh, so it's highly recommend to set up the ssh public key in your
account. Otherwise, you would need to modify the .submodules file for http access.

1.	Generate the ssh keys. Follow the steps 1 to 3 at GitHub's guide ["Generating a new SSH key"](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

2.	Add the ssh **public key** to [your account](http://projects.edy.es/users/my_profile#public_keys).

3.	Test your connection. Open Git Bash, then enter:

		:::text
		$ ssh -T git@projects.edy.es

	The first time you will receive a warning. Reply _Yes_. You should then see this:

		:::text
		Welcome to Repository Hosting's Git Server. You have been successfully authenticated.
		However you cannot connect directly with SSH, you must use the 'git' command.

	Your connection via SSH is now correct. Proceed to the next step, cloning the VPP project.

### 2. Clone the VPP project

The URLs for the main Unity projects are:

- **Professional Edition**<br>
	`ssh://git@projects.edy.es/edy/vehicle-physics-pro-professional.git`

- **Enterprise Edition**<br>
	`ssh://git@projects.edy.es/edy/vehicle-physics-pro.git`

You can find all the URLs for the repositories and submodules at the [projects site](http://projects.edy.es).

1.	Open Git Bash.

2.	_cd_ to a folder of your choice, then enter:

		:::text
		$ git clone --depth=1 <url-to-repository>

	The repository will be created in a with the name of the repository.

3. 	Fetch and update the submodules:

		:::text
		$ cd <just-created-repository-path>
		$ git submodule update --init --recursive

3.	Now you can open the project with Unity.

### 3. Maintenance & updates

##### Updating to the latest revision

This is also necessary after checking out any branch or revision in the main repository.

	:::text
	$ git pull --recurse-submodules
	$ git submodule update --init --recursive

##### Continuous Integration systems

If you're using a CI system such as TeamCity, ensure to set the refresh interval to a reasonable
rate. 1-2 times per day is enough for VPP repositories (12 hours = 720 minutes = 43200 seconds).

##### Downloading as ZIP files

Alternatively to you may download the repositories as zipped archives. [Log in](http://projects.edy.es/login)
at your account and open the repository's GitWeb URL:

![VPP Repository Links](/img/advanced/vpp-download-zip-source-repo-links.png){: .clickview .img-small }

Then click the first **zip** link for downloading the source code from the latest snapshot:

![VPP Download ZIP Source](/img/advanced/vpp-download-zip-source.png){: .clickview .img-small }

Repeat for every required repository.