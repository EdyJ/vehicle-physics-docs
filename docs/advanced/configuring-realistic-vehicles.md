# Configuring Realistic Vehicles

These are the specifications you need out of a real vehicle for recreating it in Vehicle
Physics Pro.

### Wheels and suspension

- **Front to rear axle distance** (_wheelbase_).
- **Left to right distances** (_track front_, _track rear_).
- **Vertical position of the wheel** either when suspension is fully compressed, or given a known
	suspension compression. This will define the anchor of the suspension.
- **Suspension distance**.
- **Suspension spring rates**.
- **Suspension damper rates**.
- **Wheel radius**.

#### Tire friction

Use the default values as starting point. You can fine tune it later using information from the real
vehicle, if available:

- **Maximum acceleration** and/or **brake distance without wheel lock** can be used for
	calculating the peak tire friction.
- **Brake distance with locked wheels** can be used for calculating the asymptote tire friction.
- **Maximum steer angles in curves without tire sliding at a given speed** can be used for
	configuring the slip points for the peak friction.

A precise configuration requires comparing the real reactions of the vehicle in different situations
and fitting the tire friction parameters in the simulation for matching them.

Ideally, the best tire friction data is the one extracted from real tires ([example](http://white-smoke.wikifoundry.com/page/Traction+ellipse+and+tyre+force)).
The resulting forces divided by the normal load result in the coefficient of friction under each
situation.

### Center of Mass (CoM)

- **Weight distribution**, as tested, front/rear (%).
- **Height of the center of mass**. Not typically available, but can be guessed to be around the top
	part of the chassis. It can be deducted from the angle the vehicle could drive on two side
	wheels.

### Engine and transmission

- **Engine torque and power**. Ideally, a ["dyno" curve](https://www.google.es/search?q=engine+dyno+curve&tbm=isch)
	if available. The curve shape helps also configuring the engine brake.
- **Engine rev up/down time**. How fast the engine revs up when fully pressing throttle at neutral
	gear, and how much time takes it to rev down to idle after releasing throttle. These data can
	be used for estimating the engine inertia and the engine brake curve.
- **Drive information**: front, rear, combined (details?)...
- **Transmission type**: manual, automatic, manual with auto shift, automatic with manual shift.
- **Number of gears and their ratios**.
- **Final drive ratio** (typically specified by the differential).
- **Differential type** and ratio if available.

Other elements may be present in the transmission, specially in AWD or dynamic-drive transmissions.
Examples: center differential, torque splitter.

### Aerodynamics

- The Aerodynamic drag can be estimated from the **top speed**.
- The aerodynamic downforce and tire sideways friction can be estimated from the **maximum speed at
	a curve of known radius**, and also from the **maximum lateral G supported in curves**.
