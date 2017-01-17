# GIT Repository Setup

The Professional and Enterprise licenses include access to the GIT repository.

As Professional or Enterprise licensee you should have received credentials for accessing the
repositories. You can log-in at [projects.edy.es/login](http://projects.edy.es/login).

- **Vehicle Physics Pro** is the main project.
- **Common Tools core** is a submodule with common tools and scripts.
- **Vehicle Physics core** is the submodule that actually contains the latest vehicle physics
scripts only.
- **Vehicle Physics core assets** is a submodule with common objects, materials and textures used
across different vehicle physics projects.

### Configuring the SSH public keys

The submodules are accessed via ssh, so it's highly recommend to set up the ssh public keys in your
account. Otherwise, you would need to modify the file .submodules for http access.

1.	Generate the ssh keys. Follow the steps 1 to 3 at the [GitHub's step-by-step guide for
generating ssh keys](https://help.github.com/articles/generating-ssh-keys/).

2.	Add the ssh **public key** to [your account](http://projects.edy.es/users/my_profile#public_keys).

3.	Test your connection. Open Git Bash, then enter:

		:::text
		$ ssh -T git@projects.edy.es

	The first time you will receive a warning. Reply _Yes_. You should then see this:

		:::text
		Welcome to Repository Hosting's Git Server. You have been successfully authenticated.
		However you cannot connect directly with SSH, you must use the 'git' command.

	Your connection via SSH is now correct. Proceed to the next step, cloning the VPP project.

### Cloning the VPP project

1.	Open Git Bash.

2.	_cd_ to a folder of your choice, then enter:

		:::text
		$ git clone --depth=1 ssh://git@projects.edy.es/edy/vehicle-physics-pro.git

3. 	Fetch and update the submodules:

		:::text
		$ cd vehicle-physics-pro
		$ git submodule update --init --recursive

3.	Now you can open the project at the folder **vehicle-physics-pro** with Unity 5.

!!! Info "Importing the Blender 3D models"
	Some 3D objects in the repository are in Blender format (.blend). These models require Blender
	installed to be imported properly. I recommend [Blender 2.76b](http://download.blender.org/release/Blender2.76/),
	as some recent versions seem to fail on importing .blend files in Unity.

### Upgrading to the latest revision

This is also necessary after checking out any branch or revision in the main repository.

	:::text
	$ git pull --recurse-submodules
	$ git submodule update --init --recursive

### Continuous Integration systems

If you're using a CI system such as TeamCity, ensure to set the refresh interval to a reasonable
rate. 1-2 times per day is enough for VPP repositories (12 hours = 720 minutes = 43200 seconds).

### Downloading as ZIP files

Alternatively to you may download the source code as zipped archives. [Log in](http://projects.edy.es/login)
at your account and open the repository's GitWeb URL:

![VPP Repository Links](/img/advanced/vpp-download-zip-source-repo-links.png){: .clickview .img-small }

Then click the first **zip** link for downloading the source code from the latest snapshot:

![VPP Download ZIP Source](/img/advanced/vpp-download-zip-source.png){: .clickview .img-small }

Do the above procedure for every required repository:

- **Vehicle Physics Pro**: main Unity project.
- **Common Tools core**: put the files inside the folder "Assets/Core/Common Tools core"
- **Vehicle Physics core**: put the files inside the folder "Assets/Core/Vehicle Physics core"
- **Vehicle Physics core assets**: put the files inside the folder "Assets/Core/Vehicle Physics core assets"

Now you can open the project in Unity.