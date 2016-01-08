# Vehicle Add-ons

These components are all optional, each one adding new functionality and features to the vehicle.

You could [write your own add-on components](../advanced/custom-addons.md) easily if the provided
components don't cover your needs or you need other features.

### VPAudio

Manages and plays the audio effects of the vehicle.

< pic: VPAudio inspector>

Audio Clip Template
:	An Unity AudioSource component that will be used as template when playing one-shot clips, such
	as impacts. Each one-time audio effect copies this AudioSource, plays the corresponding
	audio clip once at the effect position, then destroys the copy. The AudioSurce doesn't
	need to be part of the hierarchy of the vehicle.

Engine
:	AudioSource and parameters for the engine. The AudioSource must be part of the hierarchy of the
	vehicle and positioned accordingly to the engine's position.

Engine Extras
:	AudioSource components for the Turbo and Transmission noises. Must be part of the hierarchy of
	the vehicle and positioned properly.

	- Turbo gets applied at some RPM range
	- Transmission depends on the RPMs at the output of the gearbox (not affected by gears).

Wheels
:	AudioSource components and AudioClip objects for the wheel and tire effects. AudioSources must
	be part of the hierarchy of the vehicle and positioned properly, typically at the center of the
	vehicle.

	- Skid Audio Source: played when sliding over hard surfaces.
	- Offroad Audio Source: played when rolling over soft surfaces.
	- Bump Audio Clip: the wheel hits bumps or makes a strong contact with the ground.

	The surface type (Hard or Soft) is defined at the [GroundMaterial](ground-materials.md).

Impacts
:	AudioClips to be played when the car collides. Clips for hard and soft surfaces can be defined.
	If the soft clip is missing, the hard clip will be used also at soft surfaces (but not the
	opposite).

	The surface type (Hard or Soft) is defined at the [GroundMaterial](ground-materials.md).

Drags
:	AudioSources played while the vehicle's body is dragging on another surface. They must be
	part of the hierarchy of the vehicle and positioned properly, typically at the center of the
	vehicle.

	- Hard Drag Audio Source: played when dragging on hard surfaces.
	- Soft Drag Audio Source: played when dragging on soft surfaces.
	- Scratch Audio Clip: one-shot random audio clip that is occasionally played when dragging
		on a hard surface.

	The surface type (Hard or Soft) is defined at the [GroundMaterial](ground-materials.md).

Wind
:	AudioSource played based on the vehicle's velocity. It must be part of the hierarchy of the
	vehicle and positioned properly, typically around the center of the vehicle.

### VPTireEffects

Triggers the tire marks and particle effects based on the state of the tire and the ground material
being contacted.

The actual particle emitters and tire marks renderers are managed at the [Ground Material Manager](ground-materials.md).

< pic: VPTireEffects inspector >

Tire width
:	Width of the tires. Used for the tire marks and the particles.

Min Slip, Max Slip
:	Slip range in m/s to be considered minimum and maximum for all the effects. For example, the
	skid marks are most intense above Max Slip, and they vanish below Min Slip.

	The slip value can be seen in runtime in the [Telemetry](vehicle-debug.md):

	< Pic: telemetry data, cropped to the Slip colum and Sc marked >

##### Tire Marks

Settings for all tire marks on any terrain.

Intensity
:	How "easy" is for the tire marks to reach their maximum intensity.

Update interval
:	Interval in seconds at which new marks are generated. Bigger intervals increase performance, but
	visually reduce the quality of the tire marks.

##### Smoke

Smoke is generated when skidding over hard surfaces continuously during some time.

Min Intensity Time
:	Time (seconds) the tires must be skidding for begin producing smoke.

Max Intensity Time
:	Time skidding (seconds) when the smoke reaches the maximum intensity.

Limit Intensity Time
:	Top limit to the internally accounted skidding time.

The internally accounted time is decreased when the tires are not skidding.


### VPVisualEffects

Controls different visual effects in the vehicle

< pic: VPVisualEffects Inspector >

##### Steering wheel

Rotates the vehicle's steering wheel object according to the actual steering value.

Steering Wheel
:	Transform for the steering wheel geometry. It will be rotated locally around the Z axis.

Degrees Of Rotation
:	Total degrees of rotation of the steering wheel. It can be configured to match the value of
	actual steering input controllers.

##### Lights

Shows or hides the given objects for simulating the various lights of the vehicle. All of them
are optional.

Brake Lights Glow
:	Objects representing brake lights glowing

Brake Lights Off
:	Object representing brake lights not glowing

Reverse Lights Glow
:	Objects representing reverse lights glowing

Brake Lights Off
:	Object representing reverse lights not glowing

##### Dashboard

Gauges and lights of the vehicle's dashboard.

Rpm Gauge
:	Transform for the rpm gauge. It will be rotated locally around the Z axis.

Rpm Max
:	Maximum RPMs shown at the dashboard

Rpm Min Angle, Rpm Max Angle
:	Angles for the Rpm Gauge at the minimum (0 rpm) and maximum (Rpm Max) values.

Speed Gauge
:	Transform for the speed gauge. It will be rotated locally around the Z axis.

Speed Max Kph
:	Maximum speed in Km/h shown at the dashboard

Speed Min Angle, Speed Max Angle
:	Angles for the Speed Gauge at the minimum (0 rpm) and maximum (Speed Max Kph) values.

These objects will be shown or hidden based on the actual state of the vehicle:

Dashboard On
:	Objects representing the dashboard turned on and glowing

Dashboard Off
:	Objects representing the dashboard turned off

Stalled Lights On
:	Object representing the dashboard indicators for the stalled vehicle (typically battery, etc)
	turned on and glowing.

Stalled Lights Off
:	Object representing the above indicators turned off (not glowing).

Handbrake Lights On
:	Object representing the dashboard indicator for the handbrake turned on and glowing.

Handbrake Lights Off
:	Object representing the dashboard indicator for the handbrake turned off (not glowing).

### VPAeroSurface

Stand-alone component (it doesn't require a VehicleBase-derived component) providing drag and
downforce based on the velocity of the vehicle. The forces are applied to the vehicle at the
position of the GameObject containing this component.

The recommended setup is having two VPAeroSurface components at each axle, one at the front axle
and the other at the rear axle. Thus, the components can configure the behavior of the vehicle at
high speeds.

< pic: VPAeroSurface inspector >

Drag Coefficient
:	Coefficient for the drag force with the speed. The force is applied counteracting the vehicle's
	velocity.

Downforce Coefficient
:	Coefficient for the downforce with the speed. The force is applied that the transform's position
	and the transform.down direction.

The force magnitudes are calculated with a simple quadratic formula:

$$ F = \rho \times v^2 $$

where $F$ is the force in Newtons, $\rho$ is the coefficient and $v$ is the vehicle's speed in m/s.