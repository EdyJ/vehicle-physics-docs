# Vehicle Inertia

The inertia represents the distribution of mass within the vehicle and defines its natural
behavior. It plays a critical role in the handling and the understeer/oversteer effects.

For example, vehicles with the engine in the rear part will behave in a different way than vehicles
with the engine in the front, even with all other properties (mass, center of mass) being the
same.

VPP provides the component **VPPChassisInertia** for configuring the inertia properly.

### How to configure the vehicle inertia

Prepare a couple of objects to be used as **inertia colliders**. One will be the chassis collider
(mostly flat, resembling the shape of the car's chassis), while the other will represent the sum of
the other massive parts in the car (engine, transmission).

Here you have an example of such colliders:

![Inertia Colliders](/img/advanced/vpp-vehicle-inertia-colliders.png){: .clickview .img-medium }

These colliders do NOT substitute nor complement the actual vehicle's colliders, which are used for
collisions. Indeed, these colliders will have no effect after the vehicle is enabled. They will be
used for configuring the inertia only.

Ensure the colliders are in similar size scale with regards to the vehicle. Otherwise, you may
experience adverse effects such as wheels bumping spuriously.

Create a new child GameObject in the vehicle, then add these two new colliders under it.

![Inertia Colliders Rig](/img/advanced/vpp-vehicle-inertia-setup.png){: .clickview .img-medium }

Note how these new colliders are separate of the car's regular collider (named
"Ferrari 458 collider" in the picture)

Add the component VPChassisInertia (attached) to the child GameObject created in step 2, then add
the two inertia colliders to the "Chassis Colliders" list:

![Inertia Component](/img/advanced/vpp-vehicle-inertia-component.png){: .clickview .img-medium }

Now when the car is enabled the inertia will be configured based on these colliders. You may
tweak the under/oversteering behavior by modifying the longitudinal position of the inertia collider
repesenting the engine and transmission:

![Handling Setup](/img/advanced/vpp-vehicle-inertia-handling-setup.png){: .clickview .img-medium }

Changing the position or size of the colliders in Play mode requires the VPChassisInertia component
to be disabled and re-enabled for the changes to have effect in the inertia. Once you have a good
setting, write down the position of the colliders and configure them after leaving Play mode.
