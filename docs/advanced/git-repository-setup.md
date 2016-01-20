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

3.	You can test your connection by following the [step 5 of the GitHub's guide](https://help.github.com/articles/generating-ssh-keys/#step-5-test-the-connection):
	Open Git Bash, then enter:

		:::text
		$ ssh -T git@projects.edy.es

	After validating the server the first time (reply _Yes_ to the warning) you should see this if
	your connection is correct:

		:::text
		Welcome to Repository Hosting's Git Server. You have been successfully authenticated.
		However you cannot connect directly with SSH, you must use the 'git' command.

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

### Upgrading to the latest revision

This is also necessary after checking out any branch or revision in the main repository.

	:::text
	$ git pull --recurse-submodules
	$ git submodule update --init --recursive

### Continuous Integration systems

If you're using a CI system such as TeamCity, ensure to set the refresh interval to a reasonable
rate. 1-2 times per day is enough for VPP repositories (12 hours = 720 minutes = 43200 seconds).