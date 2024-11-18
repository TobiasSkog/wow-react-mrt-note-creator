export const generateNotesFromTemplate = (roster) => {
  return {
    "Conclave of Wind \/ Al'Akir": `Conclave of Wind / Al'Akir
{time:01:12,SCS:86182:1}Sleet Storm 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:01:40,SCS:86182:1}Sleet Storm 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:01:48,SCS:86182:1}Sleet Storm 1 - |cffc41f3b${roster["UHDK1"]}|r {spell:51052}
{time:01:49,SCS:86182:1}Sleet Storm 1 - |cffc41f3b${roster["UHDK2"]}|r {spell:51052}
{time:02:23,SCS:86182:1}Storm Shield 2 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:03:30,SCS:86182:1}Sleet Storm 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}

{time:00:03,SAA:88301:1}Phase 2 - {everyone}Stack
{time:00:45,SAA:88301:1}x4 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:01:45,SAA:88301:1}x8 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:02:45,SAA:88301:1}x12 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:03:45,SAA:88301:1}x16 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:00:05,e,HPS_alakir_45}45% - |cffff7d0a${roster["RDruid2"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:00:05,e,HPS_alakir_40}40% - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:62618}
{time:00:05,e,HPS_alakir_35}35% - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffff7d0a${roster["RDruid2"]}|r {spell:740}
{time:00:05,e,HPS_alakir_30}30% - |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
P3
{time:00:05,SAA:89668:1}Wind Burst 1 - |cffc41f3b${roster["UHDK1"]}|r {spell:51052}
{time:00:25,SAA:89668:1}Wind Burst 2 - |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:45,SAA:89668:1}Wind Burst 3 - |cffc41f3b${roster["UHDK3"]}|r {spell:51052}
{time:01:05,SAA:89668:1}Wind Burst 4 - |cffc41f3b${roster["UHDK4"]}|r {spell:51052}
{time:01:25,SAA:89668:1}Wind Burst 5 - |cffc41f3b${roster["UHDK5"]}|r {spell:51052}
{time:01:45,SAA:89668:1}Wind Burst 6 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,

    "Halfus Wyrmbreaker": `Halfus Wyrmbreaker (Requires customevent weakaura to trigger Furious Roar 1)
{time:00:03,SCS:83707:1}Scorching Breath 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:03,SCS:83707:2}Scorching Breath 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cfffefefe${roster["Disc1"]}|r {spell:33206}
{time:00:10,SCS:83707:2}Scorching Breath 2 End - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}
{time:00:03,SCS:83707:3}Scorching Breath 3
{time:00:03,SCS:83707:4}Scorching Breath 4
{time:00:03,SCS:83707:5}Scorching Breath 5
{time:00:03,SCS:83707:6}Scorching Breath 6 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:00:03,SCS:83707:7}Scorching Breath 7 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:03,e,HPS_halfus_50}50%|r Furious Roar 1 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK1"]}|r {spell:48792}
{time:00:10,e,HPS_halfus_50}50%|r Furious Roar 1 End - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:00:25,SCC:83710:3}Furious Roar 2 - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK2"]}|r {spell:48792}`,

    "Valiona & Theralion": `Valiona & Theralion
{time:00:05,SAA:86788:1}Blackout 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:05,SAA:86788:2}Blackout 2 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}  |cfff38bb9${roster["Holy1"]}|r {spell:4987}
{time:00:05,SAA:86788:3}Blackout 3 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}  |cfff38bb9${roster["Holy1"]}|r {spell:4987}
{time:00:05,SAA:86788:4}Blackout 4 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
{time:00:05,SAA:86788:5}Blackout 5 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}  |cfffefefe${roster["Disc1"]}|r {spell:64843}  |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cfff38bb9${roster["Holy1"]}|r {spell:4987}
{time:00:05,SAA:86788:6}Blackout 6 - {everyone}Sacrifice Blackout`,

    "Ascendant Council": `Ascendant Council
{time:00:05,SCC:82631:1}Aegis of Flame 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:05,SCC:82631:2}Aegis of Flame 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:03,SCC:84913:1}Lava Seed 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:03,SCC:84913:2}Lava Seed 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:03,SCC:84948:2}Gravity Crush 2 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:00:11,SCC:84948:2}Gravity Crush 2 End - |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,

    "Cho'gall": `Cho'gall
{time:00:05,SAA:81572:1}Shadow AoE 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:05,SAA:81572:2}Shadow AoE 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:05,SAA:81572:3}Shadow AoE 3 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:00:05,SAA:81572:4}Shadow AoE 4 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:05,SAA:81572:5}Shadow AoE 5 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:05,SAA:81572:6}Shadow AoE 6 - |cfffefefe${roster["Disc1"]}|r {spell:62618}
{time:00:05,SAA:81572:7}Shadow AoE 7 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
P2
{time:00:15,SCC:82630:1}|cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:30,SCC:82630:1}|cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:50,SCC:82630:1}|cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:01:05,SCC:82630:1}|cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
{time:01:15,SCC:82630:1}|cfffe7b09${roster["RDruid1"]}|r {spell:740}`,

    "Sinestra": `Sinestra
{time:00:08,SCC:89421:1}Flame Breath 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:23,SCC:90125:1}Flame Breath 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:23,SCC:90125:2}Flame Breath 3 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
P3
{time:00:08,SAR:87299:1}Flame Breath 4 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:23,SCC:90125:4}Flame Breath 5 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:23,SCC:90125:5}Flame Breath 6 - |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:23,SCC:90125:6}Flame Breath 7
{time:00:23,SCC:90125:7}Flame Breath 8
{time:00:23,SCC:90125:8}Flame Breath 9
{time:00:23,SCC:90125:9}Flame Breath 10 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:23,SCC:90125:10}Flame Breath 11 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cfffefefe${roster["Disc1"]}|r {spell:64843}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:23,SCC:90125:11}Flame Breath 12 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}  {everyone}Personals`,

    "Omnotron": `Omnotron
{time:00:05,SCS:79023:1}Fire AoE 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
{time:00:05,SCS:79023:2}Fire AoE 2 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}
{time:00:05,SCS:79023:3}Fire AoE 3 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffffffff${roster["Disc1"]}|r {spell:64843}
{time:00:05,SCS:79023:4}Fire AoE 4 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:00:05,SCS:79023:5}Fire AoE 5 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}
{time:00:05,SCS:79023:6}Fire AoE 6 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  {everyone}Personals
{time:00:03,SCS:91849:1}Grip of Death 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:00:03,SCS:91849:2}Grip of Death 2 - |cfffe7b09FDruid1|r {spell:77761}`,

    "Magmaw": `Magmaw
{time:00:03,SCC:77690:1}Lava Spew 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:03,SCC:77690:4}Lava Spew 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:03,SCC:77690:7}Lava Spew 3 - |cffffffff${roster["Disc1"]}|r {spell:64843}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:10,SAA:89773:1}Massive Crash 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}
{time:00:03,SCC:77690:10}Lava Spew 4 - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:03,SCC:77690:13}Lava Spew 5 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:03,SCC:77690:16}Lava Spew 6 - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:10,SAA:89773:2}Massive Crash 2 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffffffff${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}`,

    "Chimaeron": `Chimaeron
{time:00:03,SCC:88872:1}Systems Failure 1 - |cfff38bb9${roster["Holy2"]}|r {spell:633}  |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:15,SCC:88872:1}Systems Failure 1 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:20,SCC:88872:1}Systems Failure 1 - |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:25,SCC:88872:1}Systems Failure 1 - |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:30,SCC:88872:1}Systems Failure End - {everyone}Spread  |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:00:03,SCC:88872:2}Systems Failure 2 - |cfff38bb9${roster["Holy1"]}|r {spell:633}  |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cfffe7b09${roster["RDruid1"]}|r {spell:33891}
{time:00:15,SCC:88872:2}Systems Failure 2 - |cfffefefe${roster["Disc1"]}|r {spell:64843}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}
{time:00:20,SCC:88872:2}Systems Failure 2 - |cffc31d39${roster["UHDK5"]}|r {spell:51052}
{time:00:30,SCC:88872:2}Systems Failure End - {everyone}Spread  |cfffe7b09FDruid1|r {spell:77761}
{time:00:03,SCC:88872:3}Systems Failure 3 - |cfff38bb9Ret1|r {spell:633}
{time:00:15,SCC:88872:3}Systems Failure 3 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:20,SCC:88872:3}Systems Failure 3 - |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:25,SCC:88872:3}Systems Failure 3 - |cffc31d39${roster["UHDK3"]}|r {spell:51052}`,

    "Atramedes": `Atramedes
{time:00:45}Searing Flame 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:18,SCC:77612:3}Modulation 4 - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}
{time:00:18,SCC:77612:4}Modulation 5 - |cfffefefe${roster["Disc1"]}|r {spell:62618}
{time:00:54,SCC:77612:5}Landing - |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:01:33,SCC:77840:1}Modulation 6 - |cff006fdc${roster["RShaman1"]}|r {spell:98008}
{time:01:51,SCC:77840:1}Modulation 7 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:02:07,SCC:77840:1}Searing Flame 2 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,

    "Maloriak": `Maloriak
{time:00:09,SCC:77786:1}Scorching Blast 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}
{time:00:10,SCC:77679:1}Scorching Blast 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}  |cffc31d39${roster["UHDK5"]}|r {spell:51052}
{time:00:10,SCC:77679:2}Scorching Blast 3 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:16,SCC:77679:2}Scorching Blast End - {everyone}Spread  |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:00:15,SCC:77991:1}Acid Nova 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:00:45,SCC:77991:1}Acid Nova 2 - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}`,

    "Nefarian": `Nefarian (Requires customevent weakaura)
{time:00:05,e,HPS_nef_90}90% - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:05,e,HPS_nef_80}80% - |cfffefefe${roster["Disc2"]}|r {spell:62618}  |cffc59a6c${roster["Arms2"]}|r {spell:97462}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:05,e,HPS_nef_70}70% - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:05,e,HPS_nef_60}60% - |cffc59a6c${roster["Arms2"]}|r {spell:97462}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:05,e,HPS_nef_50}50% - |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:05,e,HPS_nef_40}40% - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}
{time:00:05,e,HPS_nef_30}30% - |cfffefefe${roster["Disc2"]}|r {spell:62618}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc31d39${roster["UHDK5"]}|r {spell:51052}
{time:00:05,e,HPS_nef_20}20% - |cfffefefe${roster["Disc1"]}|r {spell:64843}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:05,e,HPS_nef_10}10% - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cfffefefe${roster["Disc2"]}|r {spell:64843}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}`,

    "Conclave of Wind (No Auto Swap)": `Conclave of Wind (Solo)
{time:01:12,SCS:86182:1}Sleet Storm 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:01:40,SCS:86182:1}Sleet Storm 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:01:48,SCS:86182:1}Sleet Storm 1 - |cffc41f3b${roster["UHDK1"]}|r {spell:51052}
{time:01:49,SCS:86182:1}Sleet Storm 1 - |cffc41f3b${roster["UHDK2"]}|r {spell:51052}
{time:02:23,SCS:86182:1}Storm Shield 2 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:03:30,SCS:86182:1}Sleet Storm 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,

    "Al'Akir (No Auto Swap)": `Al'akir (Solo - requires customevent WA)
{time:00:03,SAA:88301:1}Phase 2 - {everyone}Stack
{time:00:45,SAA:88301:1}x4 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:01:45,SAA:88301:1}x8 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:02:45,SAA:88301:1}x12 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:03:45,SAA:88301:1}x16 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:00:05,e,HPS_alakir_45}45% - |cffff7d0a${roster["RDruid2"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:00:05,e,HPS_alakir_40}40% - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:62618}
{time:00:05,e,HPS_alakir_35}35% - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffff7d0a${roster["RDruid2"]}|r {spell:740}
{time:00:05,e,HPS_alakir_30}30% - |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
P3
{time:00:05,SAA:89668:1}Wind Burst 1 - |cffc41f3b${roster["UHDK1"]}|r {spell:51052}
{time:00:25,SAA:89668:1}Wind Burst 2 - |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:45,SAA:89668:1}Wind Burst 3 - |cffc41f3b${roster["UHDK3"]}|r {spell:51052}
{time:01:05,SAA:89668:1}Wind Burst 4 - |cffc41f3b${roster["UHDK4"]}|r {spell:51052}
{time:01:25,SAA:89668:1}Wind Burst 5 - |cffc41f3b${roster["UHDK5"]}|r {spell:51052}
{time:01:45,SAA:89668:1}Wind Burst 6 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,
  };
};

export const generateNotesFromTemplate10m = (roster) => {
  return {
    "Halfus": `Halfus Wyrmbreaker (Requires customevent weakaura to trigger Furious Roar 1)
{time:00:03,SCS:83707:1}Scorching Breath 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:03,SCS:83707:2}Scorching Breath 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cfffefefe${roster["Disc1"]}|r {spell:33206}
{time:00:10,SCS:83707:2}Scorching Breath 2 End - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}
{time:00:03,SCS:83707:3}Scorching Breath 3
{time:00:03,SCS:83707:4}Scorching Breath 4
{time:00:03,SCS:83707:5}Scorching Breath 5
{time:00:03,SCS:83707:6}Scorching Breath 6 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:00:03,SCS:83707:7}Scorching Breath 7 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:03,e,HPS_halfus_50}50%|r Furious Roar 1 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK1"]}|r {spell:48792}
{time:00:10,e,HPS_halfus_50}50%|r Furious Roar 1 End - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:00:25,SCC:83710:3}Furious Roar 2 - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK2"]}|r {spell:48792}`,

    "Valiona & Theralion": `Valiona & Theralion
{time:00:05,SAA:86788:1}Blackout 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:05,SAA:86788:2}Blackout 2 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}  |cfff38bb9${roster["Holy1"]}|r {spell:4987}
{time:00:05,SAA:86788:3}Blackout 3 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}  |cfff38bb9${roster["Holy1"]}|r {spell:4987}
{time:00:05,SAA:86788:4}Blackout 4 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
{time:00:05,SAA:86788:5}Blackout 5 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}  |cfffefefe${roster["Disc1"]}|r {spell:64843}  |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cfff38bb9${roster["Holy1"]}|r {spell:4987}
{time:00:05,SAA:86788:6}Blackout 6 - {everyone}Sacrifice Blackout`,

    "Ascendant Council": `Ascendant Council
{time:00:05,SCC:82631:1}Aegis of Flame 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:05,SCC:82631:2}Aegis of Flame 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:03,SCC:84913:1}Lava Seed 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:03,SCC:84913:2}Lava Seed 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:03,SCC:84948:2}Gravity Crush 2 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:00:11,SCC:84948:2}Gravity Crush 2 End - |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,

    "Chogall": `Cho'gall
{time:00:05,SAA:81572:1}Shadow AoE 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:05,SAA:81572:2}Shadow AoE 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:05,SAA:81572:3}Shadow AoE 3 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:00:05,SAA:81572:4}Shadow AoE 4 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:05,SAA:81572:5}Shadow AoE 5 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:05,SAA:81572:6}Shadow AoE 6 - |cfffefefe${roster["Disc1"]}|r {spell:62618}
{time:00:05,SAA:81572:7}Shadow AoE 7 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
P2
{time:00:15,SCC:82630:1}|cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:30,SCC:82630:1}|cfff38bb9${roster["Holy2"]}|r {spell:31821}
{time:00:50,SCC:82630:1}|cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:01:05,SCC:82630:1}|cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
{time:01:15,SCC:82630:1}|cfffe7b09${roster["RDruid1"]}|r {spell:740}`,

    "Sinestra": `Sinestra
{time:00:08,SCC:89421:1}Flame Breath 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:23,SCC:90125:1}Flame Breath 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:23,SCC:90125:2}Flame Breath 3 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
P3
{time:00:08,SAR:87299:1}Flame Breath 4 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:23,SCC:90125:4}Flame Breath 5 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:23,SCC:90125:5}Flame Breath 6 - |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:23,SCC:90125:6}Flame Breath 7
{time:00:23,SCC:90125:7}Flame Breath 8
{time:00:23,SCC:90125:8}Flame Breath 9
{time:00:23,SCC:90125:9}Flame Breath 10 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:23,SCC:90125:10}Flame Breath 11 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cfffefefe${roster["Disc1"]}|r {spell:64843}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:23,SCC:90125:11}Flame Breath 12 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}  {everyone}Personals`,

    "Magmaw": `Magmaw
{time:00:03,SCC:77690:1}Lava Spew 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:03,SCC:77690:4}Lava Spew 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:03,SCC:77690:7}Lava Spew 3 - |cffffffff${roster["Disc1"]}|r {spell:64843}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:10,SAA:89773:1}Massive Crash 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}
{time:00:03,SCC:77690:10}Lava Spew 4 - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:03,SCC:77690:13}Lava Spew 5 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:03,SCC:77690:16}Lava Spew 6 - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:10,SAA:89773:2}Massive Crash 2 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffffffff${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}`,

    "Omnotron": `Omnotron
{time:00:05,SCS:79023:1}Fire AoE 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
{time:00:05,SCS:79023:2}Fire AoE 2 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}
{time:00:05,SCS:79023:3}Fire AoE 3 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffffffff${roster["Disc1"]}|r {spell:64843}
{time:00:05,SCS:79023:4}Fire AoE 4 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:00:05,SCS:79023:5}Fire AoE 5 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cff006fdc${roster["RShaman1"]}|r {spell:98008}
{time:00:05,SCS:79023:6}Fire AoE 6 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  {everyone}Personals
{time:00:03,SCS:91849:1}Grip of Death 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:00:03,SCS:91849:2}Grip of Death 2 - |cfffe7b09FDruid1|r {spell:77761}`,

    "Maloriak": `Maloriak
{time:00:09,SCC:77786:1}Scorching Blast 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}
{time:00:10,SCC:77679:1}Scorching Blast 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}  |cffc31d39${roster["UHDK5"]}|r {spell:51052}
{time:00:10,SCC:77679:2}Scorching Blast 3 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:16,SCC:77679:2}Scorching Blast End - {everyone}Spread  |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:00:15,SCC:77991:1}Acid Nova 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:00:45,SCC:77991:1}Acid Nova 2 - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}`,

    "Atramedes": `Atramedes
{time:00:45}Searing Flame 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:18,SCC:77612:3}Modulation 4 - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}
{time:00:18,SCC:77612:4}Modulation 5 - |cfffefefe${roster["Disc1"]}|r {spell:62618}
{time:00:54,SCC:77612:5}Landing - |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:01:33,SCC:77840:1}Modulation 6 - |cff006fdc${roster["RShaman1"]}|r {spell:98008}
{time:01:51,SCC:77840:1}Modulation 7 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:02:07,SCC:77840:1}Searing Flame 2 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,

    "Chimaeron": `Chimaeron
{time:00:03,SCC:88872:1}Systems Failure 1 - |cfff38bb9${roster["Holy2"]}|r {spell:633}  |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:00:15,SCC:88872:1}Systems Failure 1 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:20,SCC:88872:1}Systems Failure 1 - |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:25,SCC:88872:1}Systems Failure 1 - |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:30,SCC:88872:1}Systems Failure End - {everyone}Spread  |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:00:03,SCC:88872:2}Systems Failure 2 - |cfff38bb9${roster["Holy1"]}|r {spell:633}  |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cfffe7b09${roster["RDruid1"]}|r {spell:33891}
{time:00:15,SCC:88872:2}Systems Failure 2 - |cfffefefe${roster["Disc1"]}|r {spell:64843}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}
{time:00:20,SCC:88872:2}Systems Failure 2 - |cffc31d39${roster["UHDK5"]}|r {spell:51052}
{time:00:30,SCC:88872:2}Systems Failure End - {everyone}Spread  |cfffe7b09FDruid1|r {spell:77761}
{time:00:03,SCC:88872:3}Systems Failure 3 - |cfff38bb9Ret1|r {spell:633}
{time:00:15,SCC:88872:3}Systems Failure 3 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:20,SCC:88872:3}Systems Failure 3 - |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:25,SCC:88872:3}Systems Failure 3 - |cffc31d39${roster["UHDK3"]}|r {spell:51052}`,

    "Nefarian": `Nefarian (Requires customevent weakaura)
{time:00:05,e,HPS_nef_90}90% - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:05,e,HPS_nef_80}80% - |cfffefefe${roster["Disc2"]}|r {spell:62618}  |cffc59a6c${roster["Arms2"]}|r {spell:97462}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:05,e,HPS_nef_70}70% - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:05,e,HPS_nef_60}60% - |cffc59a6c${roster["Arms2"]}|r {spell:97462}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:05,e,HPS_nef_50}50% - |cffc59a6c${roster["Arms1"]}|r {spell:97462}  |cffc31d39${roster["UHDK3"]}|r {spell:51052}
{time:00:05,e,HPS_nef_40}40% - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc31d39${roster["UHDK4"]}|r {spell:51052}
{time:00:05,e,HPS_nef_30}30% - |cfffefefe${roster["Disc2"]}|r {spell:62618}  |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc31d39${roster["UHDK5"]}|r {spell:51052}
{time:00:05,e,HPS_nef_20}20% - |cfffefefe${roster["Disc1"]}|r {spell:64843}  |cffc31d39${roster["UHDK1"]}|r {spell:51052}
{time:00:05,e,HPS_nef_10}10% - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cfffefefe${roster["Disc2"]}|r {spell:64843}  |cffc31d39${roster["UHDK2"]}|r {spell:51052}`,

    "Conclave of Wind (No Auto Swap)": `Conclave of Wind (Solo)
{time:01:12,SCS:86182:1}Sleet Storm 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:01:40,SCS:86182:1}Sleet Storm 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:01:48,SCS:86182:1}Sleet Storm 1 - |cffc41f3b${roster["UHDK1"]}|r {spell:51052}
{time:01:49,SCS:86182:1}Sleet Storm 1 - |cffc41f3b${roster["UHDK2"]}|r {spell:51052}
{time:02:23,SCS:86182:1}Storm Shield 2 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:03:30,SCS:86182:1}Sleet Storm 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,

    "Al'Akir (No Auto Swap)": `Al'akir (Solo - requires customevent WA)
{time:00:03,SAA:88301:1}Phase 2 - {everyone}Stack
{time:00:45,SAA:88301:1}x4 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:01:45,SAA:88301:1}x8 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:02:45,SAA:88301:1}x12 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:03:45,SAA:88301:1}x16 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:00:05,e,HPS_alakir_45}45% - |cffff7d0a${roster["RDruid2"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:00:05,e,HPS_alakir_40}40% - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:62618}
{time:00:05,e,HPS_alakir_35}35% - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffff7d0a${roster["RDruid2"]}|r {spell:740}
{time:00:05,e,HPS_alakir_30}30% - |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
P3
{time:00:05,SAA:89668:1}Wind Burst 1 - |cffc41f3b${roster["UHDK1"]}|r {spell:51052}
{time:00:25,SAA:89668:1}Wind Burst 2 - |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:45,SAA:89668:1}Wind Burst 3 - |cffc41f3b${roster["UHDK3"]}|r {spell:51052}
{time:01:05,SAA:89668:1}Wind Burst 4 - |cffc41f3b${roster["UHDK4"]}|r {spell:51052}
{time:01:25,SAA:89668:1}Wind Burst 5 - |cffc41f3b${roster["UHDK5"]}|r {spell:51052}
{time:01:45,SAA:89668:1}Wind Burst 6 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,










    "Conclave of Wind \/ Al'Akir": `Conclave of Wind / Al'Akir
{time:01:12,SCS:86182:1}Sleet Storm 1 - |cfffe7b09${roster["RDruid1"]}|r {spell:77761}
{time:01:40,SCS:86182:1}Sleet Storm 1 - |cfff38bb9${roster["Holy1"]}|r {spell:31821}
{time:01:48,SCS:86182:1}Sleet Storm 1 - |cffc41f3b${roster["UHDK1"]}|r {spell:51052}
{time:01:49,SCS:86182:1}Sleet Storm 1 - |cffc41f3b${roster["UHDK2"]}|r {spell:51052}
{time:02:23,SCS:86182:1}Storm Shield 2 - |cfffe7b09${roster["RDruid1"]}|r {spell:740}
{time:03:30,SCS:86182:1}Sleet Storm 2 - |cfff38bb9${roster["Holy2"]}|r {spell:31821}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}

{time:00:03,SAA:88301:1}Phase 2 - {everyone}Stack
{time:00:45,SAA:88301:1}x4 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:01:45,SAA:88301:1}x8 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:02:45,SAA:88301:1}x12 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:03:45,SAA:88301:1}x16 Acid Rain - {class:DeathKnight}|cffc41f3bDeath Knights|r {spell:48707}
{time:00:05,e,HPS_alakir_45}45% - |cffff7d0a${roster["RDruid2"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:64843}
{time:00:05,e,HPS_alakir_40}40% - |cfffe7b09${roster["RDruid1"]}|r {spell:33891}  |cfffefefe${roster["Disc1"]}|r {spell:62618}
{time:00:05,e,HPS_alakir_35}35% - |cff006fdc${roster["RShaman1"]}|r {spell:98008}  |cffff7d0a${roster["RDruid2"]}|r {spell:740}
{time:00:05,e,HPS_alakir_30}30% - |cfffe7b09${roster["RDruid1"]}|r {spell:740}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}
P3
{time:00:05,SAA:89668:1}Wind Burst 1 - |cffc41f3b${roster["UHDK1"]}|r {spell:51052}
{time:00:25,SAA:89668:1}Wind Burst 2 - |cffc31d39${roster["UHDK2"]}|r {spell:51052}
{time:00:45,SAA:89668:1}Wind Burst 3 - |cffc41f3b${roster["UHDK3"]}|r {spell:51052}
{time:01:05,SAA:89668:1}Wind Burst 4 - |cffc41f3b${roster["UHDK4"]}|r {spell:51052}
{time:01:25,SAA:89668:1}Wind Burst 5 - |cffc41f3b${roster["UHDK5"]}|r {spell:51052}
{time:01:45,SAA:89668:1}Wind Burst 6 - |cfffefefe${roster["Disc1"]}|r {spell:62618}  |cffc59a6c${roster["Arms1"]}|r {spell:97462}`,







  };
};


