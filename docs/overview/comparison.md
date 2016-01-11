### Comparison with Edy's Vehicle Physics

[Edy's Vehicle Physics](http://www.edy.es/dev/vehicle-physics/) (**EVP**, available [at the Asset Store](https://www.assetstore.unity3d.com/#/content/403))
and Vehicle Physics Pro (**VPP**) are two completely different products targeting different needs.

EVP provides a very simple vehicle controller where the actual _behavior_ or the vehicle is
configured directly: how much can it steer, how much can it drift, how much accelerates, brakes,
etc. EVP is targeted to arcade vehicles requiring realistic-looking behaviors, where the most
important features are the gameplay and the handling of the vehicle.

VPP implements a fully realistic and complete simulation of a real-world vehicle. In VPP all and
every component of the vehicle is configured: engine, clutch, transmission, differential etc. The
behavior and handling of the vehicle depend on the configured parameters of all these components.
Same setup and tunning techniques as in real vehicles are used in VPP.

The parameters configured in VPP have a correspondence with the real world. You might get the
specifications of a real vehicle and set them up in VPP for simulating that vehicle.

#### Which one is better, EVP or VPP?

They are different products targeting different needs. They cannot be compared in so simple
terms. Each product may be better depending on the type of project they will be used at.

For example, games like **Grand Theft Auto (GTA)** or **Just Cause** best fit with EVP, as vehicles are
an accessory within the game. On the other hand, simulators in the style of **Gran Turismo** or
**Project Cars** best fit with VPP, as they simulate real-world vehicles in the a realistic way.

#### I find the vehicle in EVP more stable

EVP already implements driving aids (TC, ABS, ESP) while these are not available in VPP yet.

Also, EVP uses a flat friction model which is very forgiving. A similar model is also available
in VPP (the "Constant" friction curve). You might find the vehicle in VPP more stable using this
model.

#### Which product is better for performance on mobile low-mid end?

Both products have roughly the same performance at their default settings. In VPP the requirements
might get increased depending on the specific settings of each vehicle (integration substeps, number
of blocks in the powertrain, etc). In EVP the performance depends on the total number of wheels in
the scene.

The controller example at [Creating Custom Vehicles](../advanced/custom-vehicles.md) may be used
for ensuring the most performance out of the VPP simulation.
