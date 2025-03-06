# Configuring Realistic Vehicles

This is a checklist of the main technical specifications you would need out of a real vehicle for
configuring them in Vehicle Physics Pro.

Some values are not widely available, but they may be estimated out of other specs and performance
data.

!!! Info "&fa-thumbs-o-up; Pro-Tip"
	For an exhaustive list of technical specifications and measurements that can be configured in
	VPP check out this [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1C5jLs_0o_vLlOCDswjhdPFsQxQOvcsOPRXyJgmTMaXs/edit?usp=sharing).

Links:
:	[Cars-Data](https://www.cars-data.com)<br>
	[Automobile Catalog](https://www.automobile-catalog.com)

### Mass and center of mass (CoM)

- **Total vehicle weight**.
- **Weight distribution**, as tested, front/rear (weight per axle).
- **Height of the center of mass**. Not typically available, but can be guessed to be around the top
	part of the chassis. It can also be deducted from the angle the vehicle could drive on two side
	wheels.

### Engine, transmission and driveline

- **Engine torque and power**. Ideally, a ["dyno" curve](https://www.google.es/search?q=engine+dyno+curve&tbm=isch)
	if available. The curve shape also helps configuring the engine brake.
- **Engine rev up/down time**. How fast the engine revs up when fully pressing throttle at neutral
	gear, and how much time takes it to rev down to idle after releasing throttle. For example, a
	video showing the dashboard while pressing/releasing throttle as described will do. This
	information can be used for estimating the engine inertia and the engine brake curve.
- **Drive information**: front (FWD), rear (RWD), all (AWD), combined (details?)...
- **Transmission type**: manual, automatic, manual with auto shift, automatic with manual shift.
- **Number of gears and their ratios**.
- **Final drive ratio** (typically specified by the differential).
- **Differential type** and ratio if available.

Other elements may be present in the driveline, specially in AWD or dynamic-drive setups.
Examples: center transfer case, asymmetric (epicyclic) differential, torque splitter (haldex)...

### Wheels and suspension

Detailed suspension specifications aren't typically available. They may be deducted/adapted by
watching videos where the vehicle is tested under stress conditions.

- **Wheel radius**.
- **Front to rear axle distance** (_wheelbase_).
- **Left to right distances** (_track front_, _track rear_).
- **Vertical position of the wheel** either when suspension is fully compressed, or given a known
	suspension compression. This will define the anchor of the suspension.
- **Suspension distance**.
- **Suspension spring rates**.
- **Suspension damper rates**.

#### Tire friction

Use the default values as starting point. You can fine tune them later using information from the
real vehicle, if available:

- **Maximum acceleration** and/or **brake distance without wheel lock** can be used for
	calculating the peak tire friction.
- **Brake distance with locked wheels** can be used for calculating the asymptote tire friction.
- **Maximum steer angles in curves without tire sliding at a given speed** can be used for
	configuring the slip points for the peak friction.

A precise configuration requires comparing the real reactions of the vehicle in different situations
and fitting the tire friction parameters in the simulation for matching them.

Ideally, the best tire friction data is the one extracted from real tires (i.e. a Pacejka set).
The resulting forces divided by the normal load result in the coefficient of friction under each
situation.

### Aerodynamics

- The aerodynamic drag can be estimated from the **top speed**.
- The aerodynamic downforce and tire sideways friction can be estimated from the **maximum speed at
	a curve of known radius**, and also from the **maximum lateral G supported in curves**.
