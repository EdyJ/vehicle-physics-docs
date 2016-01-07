# Vehicle Add-ons

These components are all optional, each one adding new functionality and features to the vehicle.

You could [write your own add-on components](../advanced/custom-addons.md) easily if the provided
components don't cover your needs or you need other features.

### Audio (VPAudio)

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

### Tire effects (VPTireEffects)

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


### Visual effects (VPVisualEffects)


##### Steering wheel

##### Lights

##### Dashboard


### Aerodynamic surfaces (VPAeroSurface)

Stand-alone component (it doesn't require a VehicleBase-derived component) providing drag and
downforce based on the velocity of the vehicle.

