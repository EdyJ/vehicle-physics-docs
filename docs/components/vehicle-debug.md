# Debug add-ons

Optional components that show useful information from the vehicle in runtime. They are mostly
intended to be used during the development and configuration stages.

### VPTelemetry

Shows detailed numeric data on the internal state of the vehicle and each wheel in real-time.

< pic: VPTelemetry GUI >





< pic: VPTelemetry Inspector >

Show data
:	Shows or hides the actual GUI window with the data.

Contact Depth As Suspension
:	Shows the suspension values (Susp column) as compressed distance (m) instead of compression
	ratio (%).

Show Load in Kg
:	Shows the load per wheel (Load column) in Kg (weight) instead of Newtons (force).

Enable Hot Key, Hot Key
:	Enables a hot-key for toggling the Telemetry GUI window

Font
:	Font to be used for the telemetry data. Default (recommended) is VeraMono.

##### Wheel gizmos

Show different _gizmos_ in runtime representing the state of the wheels. Gizmos are visible in the
Scene view and in the Game view with the Gizmos toggle enabled.

< Pic: Ferrari Game view with wheel gizmos and Gizmos enabled >

Show Gizmos
:	Shows / hides all gizmos

Show Local Frame
:	Local transform of the wheel. Forces and velocities are calculated with that reference frame.

Show Contact Points
:	A crossmark on each contact point.

These gizmos use a colored line for denoting the magnitude and direction of the physic property:

Show Tire Slip
:	Speed the tire is sliding over the surface. It matches the Slip (lat/long) column at the
	Telemetry.

Show Tire Forces
:	Force being applied by the tire. It matches the Force (lat/long) column at the Telemetry.

Show Surface Forces
:	Forces external to the tire required for keeping the vehicle steady on slopes.

Use Log Scale
:	Magnitudes used for draw the lines are taken in logarithmic scale. Recommended.

Gizmos At Physic Position
:	Draw the gizmos at the positions reported by the Physic engine, without any interpolation nor
	correction.

### VPForceCones

Draws 3D cones starting at the wheel's contact points representing the forces applied by the wheels
to the vehicle.

< pic: JPickup with the cones >

< pic: VPForcecones inspector >

Base Length
:	A reference length for configuring the dimensions of the cones.

Show Downforce
:	Show the downforce at each wheel

Show Tire Force
:	Show the tire forces

Combined Tire Forces
:	Shows a single combined force per wheel. If disables, shows separate cones for forward and
	sideways forces.

Use Log Scale
:	The magnitudes used for the length of the cones are taken in logarithmic scale. Recommended.