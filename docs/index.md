
## Vehicle Physics Pro

Advanced vehicle simulation kit for [Unity 3D](http://unity3d.com) providing fully realistic and
accurate vehicle physics.

Quick links: [Feature details](/about/features), [demo downloads](/about/demos), [product walkthrough](/user-guide/getting-started),
[comparing with other vehicle simulation kits](/about/comparison).

!!! warning "&fa-warning:lg; Project under development: **Beta stage**"

	**Beta stage** means the project is mature and bug-free enough to be used in actual projects,
	but some features are yet to be developed and issues might appear. Main code is not expected to
	have significant changes. Still, everything is provided as is without any warranty.

	- Some components and scripts are yet to be written or completed.
	- Some features are yet to be implemented. See the [Roadmap](#development-roadmap) below.
	- **This documentation is being actively written and updated.** Some pages are yet to be
		completed.

	**Early Access** to Vehicle Physics Pro is now available with the Professional and Enterprise
	licenses. [Learn more](about/licensing)

&fa-thumbs-up:lg; &nbsp; Stay tunned! &nbsp; Follow me [@VehiclePhysics](https://twitter.com/VehiclePhysics){: .alert-link}
on Twitter for the latest news and announcements.
{: .alert .alert-success }

<div class="imagegallery" sm="2" md="3" lg="4" style="display:none">
	<img class="clickview" src="img/gallery/vpp-ferrari.jpg"  alt="Ferrari 458 Italia">
	<img class="clickview" src="img/gallery/vpp-lancer.jpg" alt="Sports Sedan - 3D model by Eric Adams">
	<img class="clickview" src="img/gallery/vpp-huracan.jpg" alt="Sports Supercar - 3D model by Eric Adams">
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

_Some vehicle 3D Models were kindly donated by Trevor Ley and Eric Adams.<br>
Spa-Francorchamps track gently offered by Jasper Stocker, from the Track BuildR asset._
{: .centered }

Advanced AAA+ vehicle physics simulation

:	Built around an accurate physics solver providing realistic results for all vehicle types and
	setups. The precision of the numeric results depends on the integration steps only.

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

&fa-check; Skidmarks, smoke, tire trails
{: .roadmap }

&fa-check; Vehicle audio: engine, turbo, impacts, tire skid...
{: .roadmap }

&fa-check; Minor bug fixes and code polishing
{: .roadmap }

&fa-check; Scenes and vehicles for tests
{: .roadmap }

&fa-check; **Enter the Beta stage!**
{: .roadmap }

&fa-gear:spin; Replay system
{: .roadmap .wip }

&fa-gear:spin; Advanced graphic telemetry
{: .roadmap .wip }

&fa-gear:spin; Generic wheel controller support
{: .roadmap .wip }

Complete the documentation
{: .roadmap .todo }

**First release!**
{: .roadmap .todo }

Anisotropic tire friction
{: .roadmap .todo }

Driving aids
{: .roadmap .todo }

Additional components
{: .roadmap .todo }


!!! info "&fa-thumbs-o-up; Feedback is welcome!"

	- General usage, workflow, integration in current projects.
	- Simulation: components, settings, behavior.
	- Documentation: things you would want to learn, know about, or are not fully understood.
	- Documentation: typo and grammar fixes.

	Feel free to write me to [edy@vehiclephysics.com](mailto:edy@vehiclephysics.com) or via Twitter
	[@VehiclePhysics](https://twitter.com/VehiclePhysics).


#### Contributors

My most sincere gratitude to these great artists who contributed or are contributing in some way
with Vehicle Physics Pro:

- Trevor Ley (JPickup)
- [Jasper Stocker](https://www.assetstore.unity3d.com/en/#!/search/page=1/sortby=popularity/query=publisher:412) (Spa-Francorchamps, Stunt Track)
- [HereVR](https://www.assetstore.unity3d.com/en/#!/search/page=1/sortby=popularity/query=publisher:8060) (APC)
- [Dog Machine](https://www.assetstore.unity3d.com/en/#!/search/page=1/sortby=popularity/query=publisher:2914) (Multi-purpose Exploration Vehicle)
- [GameReady 3D](https://www.assetstore.unity3d.com/en/#!/search/page=1/sortby=popularity/query=publisher:1634) (Sound files)
- Eric Adams (Super car, Tuner car)


<a class="twitter-timeline" href="https://twitter.com/VehiclePhysics" data-widget-id="687956324773179396">Tweets by @VehiclePhysics</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

<!--
#### About me

Vehicle Physics Pro has been conceived, designed and implemented by [Angel Garcia Voces "Edy"](http://www.edy.es)
at Oviedo, Spain.

> I started creating this kit because I wanted to simulate vehicles since I was a kid playing with my
> Commodore 64. When I discovered Unity 3D that's what I wanted to do since the first day. But I
> didn't find any existing component, kit or document for simulating a vehicle correctly. There were
> all buggy components, too simple approaches, or too complex algorithms/methods/papers mixing
> simulation and automotive industry. I had the feeling (name it intuition) that a _simple_ way of
> simulating vehicles _correctly_ had to exist. And I spend several years researching and
> experimenting with a lot of ideas until I finally nailed it. This Vehicle Physics Pro today: the
> simplest and most efficient approach for simulating a vehicle while actually accounting for all
> major reactions and side effects in a physically correct, coherent and accurate way.
>
> I hope you have as much fun using VPP or playing VPP-based games as I'm having developing it.
-->