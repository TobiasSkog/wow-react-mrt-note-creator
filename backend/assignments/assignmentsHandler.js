export const assignmentsHandler = (api_roster) => {

    const roster = {
        FERALTANK: {
            Spells: [
                {
                    SpellName: "Stampeding Roar",
                    SpellId: 77764,
                    Cooldown: 120
                },
                {
                    SpellName: "Tranquility",
                    SpellId: 740,
                    Cooldown: 480
                },
                {
                    SpellName: "Innervate",
                    SpellId: 29166,
                    Cooldown: 180
                },
                {
                    SpellName: "Remove Corruption",
                    SpellId: 2782,
                    Cooldown: 0
                }
            ],
            Role: "TANK",           
            InRoster: 0,
            Players: []
        },
        FERAL: {
            Spells: [
                {
                    SpellName: "Stampeding Roar",
                    SpellId: 77764,
                    Cooldown: 120
                },
                {
                    SpellName: "Tranquility",
                    SpellId: 740,
                    Cooldown: 480
                },
                {
                    SpellName: "Innervate",
                    SpellId: 29166,
                    Cooldown: 180
                },
                {
                    SpellName: "Remove Corruption",
                    SpellId: 2782,
                    Cooldown: 0
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        BOOMIE: {
            Spells: [
                {
                    SpellName: "Stampeding Roar",
                    SpellId: 77764,
                    Cooldown: 120
                },
                {
                    SpellName: "Tranquility",
                    SpellId: 740,
                    Cooldown: 480
                },
                {
                    SpellName: "Innervate",
                    SpellId: 29166,
                    Cooldown: 180
                },
                {
                    SpellName: "Remove Corruption",
                    SpellId: 2782,
                    Cooldown: 0
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        RDRUID: {
            Spells: [
                {
                    SpellName: "Stampeding Roar",
                    SpellId: 77764,
                    Cooldown: 120
                },
                {
                    SpellName: "Tranquility",
                    SpellId: 740,
                    Cooldown: 180
                },
                {
                    SpellName: "Tree of Life",
                    SpellId: 33891,
                    Cooldown: 180
                },
                {
                    SpellName: "Innervate",
                    SpellId: 29166,
                    Cooldown: 180
                },
                {
                    SpellName: "Remove Corruption",
                    SpellId: 2782,
                    Cooldown: 0
                }
            ],
            Role: "HEALER",
            InRoster: 0
        },

        BLOODDK: {
            Spells: [
                {
                    SpellName: "Death Grip",
                    SpellId: 49576,
                    Cooldown: 35
                },
                {
                    SpellName: "Anti-Magic Shell",
                    SpellId: 48707,
                    Cooldown: 45
                }
            ],
            Role: "TANK",
            InRoster: 0
        },
        FROSTDK: {
            Spells: [
                {
                    SpellName: "Death Grip",
                    SpellId: 49576,
                    Cooldown: 35
                },
                {
                    SpellName: "Anti-Magic Shell",
                    SpellId: 48707,
                    Cooldown: 45
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        UHDK: {
            Spells: [
                {
                    SpellName: "Death Grip",
                    SpellId: 49576,
                    Cooldown: 35
                },
                {
                    SpellName: "Anti-Magic Shell",
                    SpellId: 48707,
                    Cooldown: 45
                },
                {
                    SpellName: "Anti-Magic Zone",
                    SpellId: 51052,
                    Cooldown: 120
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        SURVIVAL: {
            Spells: [
                {
                    SpellName: "Misdirection",
                    SpellId: 3447,
                    Cooldown: 30
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        BM: {
            Spells: [
                {
                    SpellName: "Misdirection",
                    SpellId: 3447,
                    Cooldown: 30
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        MARKS: {
            Spells: [
                {
                    SpellName: "Misdirection",
                    SpellId: 3447,
                    Cooldown: 30
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        PROTPALA: {
            Spells: [
                {
                    SpellName: "Divine Guardian",
                    SpellId: 70940,
                    Cooldown: 180
                },
                {
                    SpellName: "Lay on Hands",
                    SpellId: 633,
                    Cooldown: 600
                },
                {
                    SpellName: "Hand of Protection",
                    SpellId: 1022,
                    Cooldown: 300
                },
                {
                    SpellName: "Hand of Freedom",
                    SpellId: 1044,
                    Cooldown: 25
                },
                {
                    SpellName: "Hand of Salvation",
                    SpellId: 1038,
                    Cooldown: 120
                },
                {
                    SpellName: "Hand of Sacrifice",
                    SpellId: 6940,
                    Cooldown: 120
                },
                {
                    SpellName: "Divine Shield",
                    SpellId: 642,
                    Cooldown: 300
                }

            ],
            Role: "TANK",
            InRoster: 0
        },
        HPALA: {
            Spells: [
                {
                    SpellName: "Aura Mastery",
                    SpellId: 31821,
                    Cooldown: 120
                },
                {
                    SpellName: "Lay on Hands",
                    SpellId: 633,
                    Cooldown: 600
                },
                {
                    SpellName: "Hand of Protection",
                    SpellId: 1022,
                    Cooldown: 300
                },
                {
                    SpellName: "Hand of Freedom",
                    SpellId: 1044,
                    Cooldown: 25
                },
                {
                    SpellName: "Hand of Salvation",
                    SpellId: 1038,
                    Cooldown: 120
                },
                {
                    SpellName: "Hand of Sacrifice",
                    SpellId: 6940,
                    Cooldown: 120
                },
                {
                    SpellName: "Divine Shield",
                    SpellId: 642,
                    Cooldown: 300
                }
            ],
            Role: "HEALER",
            InRoster: 0
        },
        RETPALA: {
            Spells: [
                {
                    SpellName: "Lay on Hands",
                    SpellId: 633,
                    Cooldown: 600
                },
                {
                    SpellName: "Hand of Protection",
                    SpellId: 1022,
                    Cooldown: 300
                },
                {
                    SpellName: "Hand of Freedom",
                    SpellId: 1044,
                    Cooldown: 25
                },
                {
                    SpellName: "Hand of Salvation",
                    SpellId: 1038,
                    Cooldown: 120
                },
                {
                    SpellName: "Hand of Sacrifice",
                    SpellId: 6940,
                    Cooldown: 120
                },
                {
                    SpellName: "Divine Shield",
                    SpellId: 642,
                    Cooldown: 300
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        DISC: {
            Spells: [
                {
                    SpellName: "Pain Suppression",
                    SpellId: 33206,
                    Cooldown: 180
                },
                {
                    SpellName: "Power Word: Barrier",
                    SpellId: 62618,
                    Cooldown: 180
                },
                {
                    SpellName: "Power Infusion",
                    SpellId: 10060,
                    Cooldown: 120
                },
                {
                    SpellName: "Divine Hymn",
                    SpellId: 64843,
                    Cooldown: 480
                },
                {
                    SpellName: "Divine Hymn",
                    SpellId: 64843,
                    Cooldown: 480
                },
                {
                    SpellName: "Hymn of Hope",
                    SpellId: 64901,
                    Cooldown: 360
                },
                {
                    SpellName: "Fear Ward",
                    SpellId: 6346,
                    Cooldown: 180
                }
            ],
            Role: "HEALER",
            InRoster: 0
        },
        HOLYPRIEST: {
            Spells: [
                {
                    SpellName: "Guardian Spirit",
                    SpellId: 47788,
                    Cooldown: 180
                },
                {
                    SpellName: "Divine Hymn",
                    SpellId: 64843,
                    Cooldown: 480
                },
                {
                    SpellName: "Divine Hymn",
                    SpellId: 64843,
                    Cooldown: 480
                },
                {
                    SpellName: "Hymn of Hope",
                    SpellId: 64901,
                    Cooldown: 360
                },
                {
                    SpellName: "Fear Ward",
                    SpellId: 6346,
                    Cooldown: 180
                }
            ],
            Role: "HEALER",
            InRoster: 0
        },
        SPRIEST: {
            Spells: [
                {
                    SpellName: "Divine Hymn",
                    SpellId: 64843,
                    Cooldown: 480
                },
                {
                    SpellName: "Divine Hymn",
                    SpellId: 64843,
                    Cooldown: 480
                },
                {
                    SpellName: "Hymn of Hope",
                    SpellId: 64901,
                    Cooldown: 360
                },
                {
                    SpellName: "Fear Ward",
                    SpellId: 6346,
                    Cooldown: 180
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        MAGE: {
            Spells: [
                {
                    SpellName: "Time Warp",
                    SpellId: 80353,
                    Cooldown: 300
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        COMBAT: {
            Spells: [
                {
                    SpellName: "Gouge",
                    SpellId: 1776,
                    Cooldown: 10
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        ASSA: {
            Spells: [
                {
                    SpellName: "Gouge",
                    SpellId: 1776,
                    Cooldown: 10
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        SUB: {
            Spells: [
                {
                    SpellName: "Gouge",
                    SpellId: 1776,
                    Cooldown: 10
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        RSHAM: {
            Spells: [
                {
                    SpellName: "Mana Tide Totem",
                    SpellId: 16190,
                    Cooldown: 180
                },
                {
                    SpellName: "Spirit Link Totem",
                    SpellId: 98008,
                    Cooldown: 180
                },
                {
                    SpellName: "Bloodlust",
                    SpellId: 2825,
                    Cooldown: 300
                }
            ],
            Role: "HEALER",
            InRoster: 0
        },
        ENH: {
            Spells: [
                {
                    SpellName: "Bloodlust",
                    SpellId: 2825,
                    Cooldown: 300
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        ELE: {
            Spells: [
                {
                    SpellName: "Bloodlust",
                    SpellId: 2825,
                    Cooldown: 300
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        LOCK: {
            Spells: [
                {
                    SpellName: "Soulstone Resurrection",
                    SpellId: 20707,
                    Cooldown: 900
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        PROTWARR: {
            Spells: [
                {
                    SpellName: "Rallying Cry",
                    SpellId: 97462,
                    Cooldown: 180
                }
            ],
            Role: "TANK",
            InRoster: 0
        },
        ARMS: {
            Spells: [
                {
                    SpellName: "Rallying Cry",
                    SpellId: 97462,
                    Cooldown: 180
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        },
        FURY: {
            Spells: [
                {
                    SpellName: "Rallying Cry",
                    SpellId: 97462,
                    Cooldown: 180
                }
            ],
            Role: "DAMAGER",
            InRoster: 0
        }
    }

    // SCC - SPELL_CAST_SUCCESS
    // SCS - SPELL_CAST_START
    // SAA - SPELL_AURA_APPLIED
    // SAR - SPELL_AURA_REMOVED

    


    const specToAssignmentName = {
        // DRUID
        "Guardian": "FERALTANK",
        "Restoration": "RDRUID",
        "Feral": "FERAL",
        "Balance": "BOOMIE",

        // DK
        "Blood_Tank": "BLOODDK",
        "Frost_DPS": "FROSTDK",
        "Unholy_DPS": "UHDK",

        // HUNTER
        "Survival": "SURVIVAL",
        "Beast Mastery": "BM",
        "Marksmanship": "MARKS",

        // PALADINS
        "Protection1": "PROTPALA",
        "Holy1": "HPALA",
        "Retribution": "RETPALA",

        // PRIESTS
        "Discipline": "DISC",
        "Holy": "HOLYPRIEST",
        "Shadow": "SPRIEST",

        // MAGES
        "Arcane": "MAGE",
        "Fire": "MAGE",
        "Frost": "MAGE",

        // ROGUES
        "Combat": "COMBAT",
        "Assassination": "ASSA",
        "Subtlety": "SUB",

        // SHAMANS
        "Restoration1": "RSHAM",
        "Enhancement": "ENH",
        "Elemental": "ELE",

        // WARLOCKS
        "Affliction": "LOCK",
        "Demonology": "LOCK",
        "Destruction": "LOCK",

        // WARRIORS
        "Protection": "PROTWARR",
        "Arms": "ARMS",
        "Fury": "FURY"
    }




};


export const noteGenerationLogic = (roster) => {
    const bosses = {
        Shannox: {
            Enrage:600,
            Spells: [
                {
                    SpellName: "Immolation Trap",
                    SpellId: 99839,
                    Cooldown: 25.5,
                    CooldownStart: 8.4,
                    Count: 0,
                    Event: "NONE",
                    SubEvent: "SPELL_SUMMON",
                    PriorityCooldowns: [
                        {
                            Order: 1,
                            Spec: "HEALER",
                            CooldownId: 89012,
                            CooldownName: "Snopp power"
                        },
                        {
                            Order: 2,
                            Spec: "HEALER",
                        },
                        {
                            Order: 3,
                            Spec: "HEALER",
                        },
                        {
                            Order: 4,
                            Spec: "HEALER",
                        },
                        {
                            Order: 5,
                            Spec: "HEALER",
                        },
                    ]
                },
                {
                    SpellName: "Crystal Prison Trap",
                    SpellId: 99836,
                    Cooldown: 25.5,
                    CooldownStart: 8.4,
                    Count: 0,
                    Event: "NONE",
                    SubEvent: "SPELL_SUMMON"
                },
                {
                    SpellName: "Arching Slash",
                    SpellId: 0,
                    Cooldown: 0,
                    CooldownStart: 0,
                    Count: 0,
                    Event: "",
                    SubEvent: ""
                },
                {
                    SpellName: "Jagged Tear",
                    SpellId: 0,
                    Cooldown: 0,
                    CooldownStart: 0,
                    Count: 0,
                    Event: "",
                    SubEvent: ""
                },
                {
                    SpellName: "Hurl Spear",
                    SpellId: 100002,
                    Cooldown: 42,
                    CooldownStart: 20,
                    Count: 0,
                    Event: "SCS",
                    SubEvent: "SPELL_CAST_START"
                },
                {
                    SpellName: "Face Rage",
                    SpellId: 99947,
                    Cooldown: 30,
                    CooldownStart: 15,
                    Count: 0,
                    Event: "SAA",
                    SubEvent: "SPELL_AURA_APPLIED"
                },
            ],
            
        },
        Rhyolith: {
            Enrage:300,
            Spells: [
            {
                SpellName: "Concussive Stomp",
                SpellId: 97282,
                Cooldown: 27.3,
                CooldownStart: 16,
                Count: 0,
                Event: "SCS",
                SubEvent: "SPELL_CAST_START"
            },
            {
                SpellName: "Volcano",
                SpellId: 98493,
                Cooldown: 40,
                CooldownStart: 30,
                Count: 0,
                Event: "SPELL_CAST_SUCCESS",
                SubEvent: "SCS"
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            }
        ]
        },
        Bethtilac: {
            Enrage:600,
            Spells: [
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            }
        ]
        },
        Baleroc: {
            Enrage:600,
            Spells: [
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            }
        ]
        },
        Alysrazor: {
            Enrage:600,
            Spells: [
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            }
        ]
        },
        Majordomo: {
            Enrage:600,
            Spells: [
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            }
        ]
        },
        Ragnaros: {
            Enrage:600,
            Spells: [
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            },
            {
                SpellName: "",
                SpellId: 0,
                Cooldown: 0,
                CooldownStart: 0,
                Count: 0,
                Event: "",
                SubEvent: ""
            }
        ]
        }

    }
    
    let note;

    bosses.array.forEach(boss => {
        note += bossNoteGeneration(boss, roster);
    });


}

export const bossNoteGeneration = (boss, roster) => {
    const bossMinCounter = 
    [
        {0:3},
        {1:1},
        {2:3},
        {3:5},
        {4:3},
        {5:2}
    ];

    boss.Spells.forEach(bossSpell => {
        let counterCheck = bossMinCounter[bossSpell.SpellId];
        bossSpell.PriorityCooldowns.forEach(prio => {
            if (roster[prio.Class].InRoster > 0){
                if (roster.Players.Assignments.length == 0 || counterCheck <= roster.Players.Assignments.Counter){
                    let counter = roster.Players.Assignments.length == 0 ? 1 : roster.Players.Assignments.Counter++;
                    let timeOffset = (counter * bossSpell.Cooldown) + (bossSpell.CooldownStart);
                    roster.Players.forEach(player => {
                        if (player.Assignments.length == 0) {
                            const spell = roster[prio.Class].Spells.find(s => s.SpellId === prio.CooldownId);
                            if (spell) {
                                let cooldownRemaining = spell.Cooldown - timeOffset;
                                if (cooldownRemaining <= 0) {
                                    player.Assignments.push({
                                        BossSpellId: bossSpell.SpellId,
                                        PlayerSpellId: prio.CooldownId,
                                        Counter: counter,
                                        TimeOffset: timeOffset,
                                        CooldownRemaining: cooldownRemaining
                                    });
                                }
                            }
                        }
                    });
                }
            }
        })
    }
)}




// if (player.Assignments.length == 0){
//     player.Assignments.push(
//         {
//         BossSpellId: bossSpell.SpellId,
//         PlayerSpellId: prio.CooldownId,
//         Counter: counter,
//         TimeOffset: timeOffset
//     });
// }else{
//     const spell = roster[prio.Class].Spells.find(s => s.SpellId === prio.CooldownId);
//     if(spell && spell.Cooldown - timeOffset > 0){
//         player.Assignments.push(
//             {
//                 BossSpellId: bossSpell.SpellId,
//                 PlayerSpellId: prio.CooldownId,
//                 Counter: counter,
//                 TimeOffset: timeOffset
//             }
//         );
//     }
// }  
// const specCount = {
//     FERALTANK: 0,
//     RDRUID: 0,
//     FERAL: 0,
//     BOOMIE: 0,
//     BLOODDK: 0,
//     FROSTDK: 0,
//     UHDK: 0,
//     SURVIVAL: 0,
//     BM: 0,
//     MARKS: 0,
//     PROTPALA: 0,
//     HPALA: 0,
//     RETPALA: 0,
//     DISC: 0,
//     HOLYPRIEST: 0,
//     SPRIEST: 0,
//     MAGE: 0,
//     COMBAT: 0,
//     ASSA: 0,
//     SUB: 0,
//     RSHAM: 0,
//     ENH: 0,
//     ELE: 0,
//     LOCK: 0,
//     PROTWARR: 0,
//     ARMS: 0,
//     FURY: 0
// };