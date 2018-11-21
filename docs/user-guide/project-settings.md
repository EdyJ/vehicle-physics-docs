
# Unity Project Settings

Some project settings affect the vehicle simulation. Here are them described.

## Time

Project Settings > Time > Fixed Timestep

Defines the rate the physics runs at. Default is 0.02 = 50Hz. VPP works perfectly fine with the
default 50Hz physics rate. Indeed, I develop and test VPP using the default rate.

The greater rate (smaller Fixed Timestep) the more precise results, but more CPU time is required by
physics. Physics runs exclusively in the CPU (no GPU).

The smaller rate (bigger Fixed Timestep) the less precise results but less CPU is spend on physics.
I've tested VPP with rates as low as 16Hz (Fixed Timestep = 0.06) with acceptable results.

## Physics

Project Settings > Physics

Friction Type

Contacts Generation
< TO-DO: test in Unity 2018.3 >

Contact Pairs Mode

Auto Sync Transforms:
< TO-DO: test with replays and snapshots >

Enable Enhanced Determinism

Since 2018.3 physics is already more deterministic. This option is for special cases (see blog for
details) and has a performance costs. It should not be necessary.

