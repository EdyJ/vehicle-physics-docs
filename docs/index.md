
## Vehicle Physics Pro

An advanced vehicle simulation kit for Unity 3D providing fully realistic and accurate vehicle physics.

Quick links:

- [Product walkthrough](/user-guide/getting-started)
- [Demo downloads](/about/demos)
- [Showcase](/about/showcase)
- [Changelog](/about/changelog)
- [Licensing](/about/licensing)

Advanced AAA+ vehicle physics simulation

:	Built on top of an accurate vehicle dynamics solver providing realistic results for all vehicle
	types and setups.

Modular powertrain design

:	Vehicle dynamics core is implemented with functional blocks with inputs and/or outputs that can
	be connected in any number and combination. Any vehicle setup can be emulated by arranging and
	connecting blocks. VPP includes standard vehicle blocks such as engine, clutch, gearbox,
	differential, torque splitter, and more.

Advanced wheel and tire friction simulation

:	Provides accurate friction values in all situations. All torques acting in the wheel are
	properly combined resulting in accurate tire forces and correctly calculated wheel spin rate.

Realistic and coherent

: 	The underlying concept is a custom vehicle simulation model based on essential physics facts:
	forces, torques and frictions. This model is easier to understand and simpler to calculate than
	the commonly used models, yet providing physically accurate and realistic results.

	[More features and details](about/features)

&fa-thumbs-up:lg; &nbsp; Stay tunned! Follow [@VehiclePhysics](https://twitter.com/VehiclePhysics){: .alert-link}
on Twitter for the latest news and announcements.
{: .alert .alert-success }

<!-- Not good: keeps adjusting the height to the current slide. Breaks reading afterwards.

div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

	<ol class="carousel-indicators">
		<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		<li data-target="#carousel-example-generic" data-slide-to="1"></li>
		<li data-target="#carousel-example-generic" data-slide-to="2"></li>
		<li data-target="#carousel-example-generic" data-slide-to="3"></li>
		<li data-target="#carousel-example-generic" data-slide-to="4"></li>
		<li data-target="#carousel-example-generic" data-slide-to="5"></li>
		<li data-target="#carousel-example-generic" data-slide-to="6"></li>
		<li data-target="#carousel-example-generic" data-slide-to="7"></li>
		<li data-target="#carousel-example-generic" data-slide-to="8"></li>
	</ol>

	<div class="carousel-inner" role="listbox">
		<div class="item active">
			<img class="clickview, img-carousel" src="img/gallery/vpp-ferrari.jpg" alt="Ferrari 458 Italia">
		</div>
		<div class="item">
			<img class="clickview, img-carousel" src="img/gallery/vpp-jpickup.jpg" alt="Japanese Pickup Truck - 3D model by Trevor Ley">
		</div>
		<div class="item">
			<img class="clickview, img-carousel" src="img/gallery/vpp-ferrari-burnout.jpg" alt="Ferrari 458 doing some donuts and burnouts">
		</div>
		<div class="item">
			<img class="clickview, img-carousel" src="img/gallery/vpp-ferrari-spa.jpg" alt="Ferrari 458 at 195 kph / 120 mph before riding Eau Rouge at Spa-Francorchamps">
		</div>
		<div class="item">
			<img class="clickview, img-carousel" src="img/gallery/vpp-loop.jpg" alt="Riding a loop with the Ferrari 458">
		</div>
		<div class="item">
			<img class="clickview, img-carousel" src="img/gallery/vpp-alpha-sandbox.jpg" alt="Early sandbox test with Vehicle Physics Pro">
		</div>
		<div class="item">
			<img class="clickview, img-carousel" src="img/gallery/vpp-truck-trailer-setup.jpg" alt="Setting up a Mercedes-Benz Actros to attach to its trailer">
		</div>
		<div class="item">
			<img class="clickview, img-carousel" src="img/gallery/vpp-truck-trailer-offroad.jpg" alt="Extreme offroad test for the Mercedes-Benz Actros + trailer">
		</div>
		<div class="item">
			<img class="clickview, img-carousel" src="img/gallery/vpp-apc-setup.jpg" alt="Extreme driveline setup: 8-wheel drive, seven differentials, three differential setups">
		</div>
	</div>

	<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div -->


<div class="imagegallery" sm="2" md="3" lg="4" style="display:none">
	<img class="clickview" src="img/gallery/vpp-ferrari.jpg"  alt="Ferrari 458 Italia">
	<img class="clickview" src="img/gallery/vpp-lancer.jpg" alt="Sports Sedan">
	<img class="clickview" src="img/gallery/vpp-huracan.jpg" alt="Sports Supercar">
	<img class="clickview" src="img/gallery/vpp-jpickup.jpg" alt="Japanese Pickup Truck - 3D model by Trevor Ley">

	<img class="clickview" src="img/gallery/vpp-ferrari-burnout.jpg" alt="Ferrari 458 doing some donuts and burnouts">
	<img class="clickview" src="img/gallery/vpp-ferrari-spa.jpg" alt="Ferrari 458 at 195 kph / 120 mph before riding Eau Rouge at Spa-Francorchamps">
	<img class="clickview" src="img/gallery/vpp-truck-trailer-setup.jpg" alt="Setting up a Mercedes-Benz Actros to attach to its trailer">
	<img class="clickview" src="img/gallery/vpp-truck-trailer-offroad.jpg" alt="Extreme offroad test for the Mercedes-Benz Actros + trailer">

	<img class="clickview" src="img/gallery/vpp-loop.jpg" alt="Riding a loop with the Ferrari 458">
	<img class="clickview" src="img/gallery/vpp-ferrari-monza.jpg" alt="Ferrari 458 taking the Variante del Rettifilo at Monza">
	<img class="clickview" src="img/gallery/vpp-alpha-sandbox.jpg" alt="Early sandbox test with Vehicle Physics Pro">
	<img class="clickview" src="img/gallery/vpp-apc-setup.jpg" alt="Extreme driveline setup: 8-wheel drive, seven differentials, three differential setups">
</div>

#### Development roadmap

&fa-check; Base: Tire friction, solver, modular torque model
{: .roadmap }

&fa-check; Differential
{: .roadmap }

&fa-check; Steering, Brakes
{: .roadmap }

&fa-check; Engine + clutch
{: .roadmap }

&fa-check; Gearbox
{: .roadmap }

&fa-check; Driveline and axle setup
{: .roadmap }

&fa-check; Repository clean up and upgrade to Unity 5
{: .roadmap }

&fa-check; [Skidmarks, smoke, tire trails](components/vehicle-addons#vptireeffects)
{: .roadmap }

&fa-check; [Vehicle audio: engine, turbo, impacts, tire skid...](components/vehicle-addons#vpaudio)
{: .roadmap }

&fa-check; Minor bug fixes and code polishing
{: .roadmap }

&fa-check; Scenes and vehicles for tests
{: .roadmap }

&fa-check; **Enter the Beta stage!**
{: .roadmap }

&fa-check; Generic steering wheels support (DirectInput)
{: .roadmap }

&fa-check; [Performance Analysis Charts](components/vehicle-telemetry#vpperformanceanalysis)
{: .roadmap }

&fa-check; Replay system with rewind & continue
{: .roadmap }

&fa-check; Driving aids
{: .roadmap }

&fa-check; Demo scenes and examples
{: .roadmap }

&fa-check; Package for the Unity Asset Store
{: .roadmap }

&fa-check; **First release!**
{: .roadmap }

&fa-gear:spin; Complete the documentation
{: .roadmap .wip }

Anisotropic tire friction
{: .roadmap .todo }

Hybrid 3D wheel solution
{: .roadmap .todo }


!!! info "&fa-thumbs-o-up; Feedback is welcome!"

	- General usage, workflow, integration in current projects.
	- Simulation: components, settings, behavior.
	- Documentation: things you would want to learn, know about, or are not fully understood.
	- Documentation: typo and grammar fixes.

	Feel free to write me to [edy@vehiclephysics.com](mailto:edy@vehiclephysics.com) or via Twitter
	[@VehiclePhysics](https://twitter.com/VehiclePhysics).

<a class="twitter-timeline" href="https://twitter.com/VehiclePhysics" data-widget-id="687956324773179396">Tweets by @VehiclePhysics</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
