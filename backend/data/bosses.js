export const bossData = {
    Shannox:{
        name: "Shannox",
        spells: [
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            
        ],
        specialAssignments: function(roster) {
            let mSkull = [];
            let mCross = [];
            let rSkull = [];
            let rCross = [];
            
            const melees = roster.players.filter(player => player.role === "Melee");
            const ranged = roster.players.filter(player => player.role === "Ranged");

            for (let i = 0; i < melees.length; i++) {
                if (i % 2 === 0) {
                    mSkull.push(melees[i]);
                } else {
                    mCross.push(melees[i]);
                }
            }

            for (let i = 0; i < ranged.length; i++) {
                if (i % 2 === 0) {
                    rSkull.push(ranged[i]);
                } else {
                    rCross.push(ranged[i]);
                }
            }

            return `Melee targets:\nSkull: ${mSkull.map(player => player.name).join(", ")}\nCross: ${mCross.map(player => player.name).join(", ")}\n` +
                   `Ranged start targets:\nSkull: ${rSkull.map(player => player.name).join(", ")}\nCross: ${rCross.map(player => player.name).join(", ")}\n`;
        }
    },
    Bethtilac:{
        name: "Bethtilac",
        spells: [
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            
        ],
        specialAssignments: function(roster) {
            let mSkull = [];
            let mCross = [];
            let rSkull = [];
            let rCross = [];
            
            const melees = roster.players.filter(player => player.role === "Melee");
            const ranged = roster.players.filter(player => player.role === "Ranged");

            for (let i = 0; i < melees.length; i++) {
                if (i % 2 === 0) {
                    mSkull.push(melees[i]);
                } else {
                    mCross.push(melees[i]);
                }
            }

            for (let i = 0; i < ranged.length; i++) {
                if (i % 2 === 0) {
                    rSkull.push(ranged[i]);
                } else {
                    rCross.push(ranged[i]);
                }
            }

            return `Melee targets:\nSkull: ${mSkull.map(player => player.name).join(", ")}\nCross: ${mCross.map(player => player.name).join(", ")}\n` +
                   `Ranged start targets:\nSkull: ${rSkull.map(player => player.name).join(", ")}\nCross: ${rCross.map(player => player.name).join(", ")}\n`;
        }
    },
    Rhyolith:{
        name: "Rhyolith",
        spells: [
            {
                name: "Concussive Stomp",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            {
                name: "Concussive Stomp",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]            
            },
            
        ],
        specialAssignments: function(roster) {
            let mSkull = [];
            let mCross = [];
            let rSkull = [];
            let rCross = [];
            
            const melees = roster.players.filter(player => player.role === "Melee");
            const ranged = roster.players.filter(player => player.role === "Ranged");

            for (let i = 0; i < melees.length; i++) {
                if (i % 2 === 0) {
                    mSkull.push(melees[i]);
                } else {
                    mCross.push(melees[i]);
                }
            }

            for (let i = 0; i < ranged.length; i++) {
                if (i % 2 === 0) {
                    rSkull.push(ranged[i]);
                } else {
                    rCross.push(ranged[i]);
                }
            }

            return `Melee targets:\nSkull: ${mSkull.map(player => player.name).join(", ")}\nCross: ${mCross.map(player => player.name).join(", ")}\n` +
                   `Ranged start targets:\nSkull: ${rSkull.map(player => player.name).join(", ")}\nCross: ${rCross.map(player => player.name).join(", ")}\n`;
        }
    },
    Alysrazor:{
        name: "Alysrazor",
        spells: [
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            
        ],
        specialAssignments: function(roster) {
            let airGroup = roster.players.filter(player => player.role === "Ranged" && player.spec === ("Fire" || "Shadow" || "Affliction" || "Balance") || player.role === "Melee" && player.spec === ("Feral" || "Assassination")).splice(0, 7);
            let square = [];
            let star = [];
            return `Flying Players: ${airGroup.map(player => player.name).join(", ")}\n`
        }
    },
    Baleroc:{
        name: "Baleroc",
        spells: [
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            
        ],
        specialAssignments: function(roster) {
            let mSkull = [];
            let mCross = [];
            let rSkull = [];
            let rCross = [];
            
            const melees = roster.players.filter(player => player.role === "Melee");
            const ranged = roster.players.filter(player => player.role === "Ranged");

            for (let i = 0; i < melees.length; i++) {
                if (i % 2 === 0) {
                    mSkull.push(melees[i]);
                } else {
                    mCross.push(melees[i]);
                }
            }

            for (let i = 0; i < ranged.length; i++) {
                if (i % 2 === 0) {
                    rSkull.push(ranged[i]);
                } else {
                    rCross.push(ranged[i]);
                }
            }

            return `Melee targets:\nSkull: ${mSkull.map(player => player.name).join(", ")}\nCross: ${mCross.map(player => player.name).join(", ")}\n` +
                   `Ranged start targets:\nSkull: ${rSkull.map(player => player.name).join(", ")}\nCross: ${rCross.map(player => player.name).join(", ")}\n`;
        }
    },
    Majordomo:{
        name: "Majordomo",
        spells: [
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            
        ],
        specialAssignments: function(roster) {
            let mSkull = [];
            let mCross = [];
            let rSkull = [];
            let rCross = [];
            
            const melees = roster.players.filter(player => player.role === "Melee");
            const ranged = roster.players.filter(player => player.role === "Ranged");

            for (let i = 0; i < melees.length; i++) {
                if (i % 2 === 0) {
                    mSkull.push(melees[i]);
                } else {
                    mCross.push(melees[i]);
                }
            }

            for (let i = 0; i < ranged.length; i++) {
                if (i % 2 === 0) {
                    rSkull.push(ranged[i]);
                } else {
                    rCross.push(ranged[i]);
                }
            }

            return `Melee targets:\nSkull: ${mSkull.map(player => player.name).join(", ")}\nCross: ${mCross.map(player => player.name).join(", ")}\n` +
                   `Ranged start targets:\nSkull: ${rSkull.map(player => player.name).join(", ")}\nCross: ${rCross.map(player => player.name).join(", ")}\n`;
        }
    },
    Ragnaros:{
        name: "Ragnaros",
        spells: [
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            {
                name: "FIX ME YOOO",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Disc",
                        spell: "Divine Hymn",
                        cd: 120
                    }
                ]
            },
            
        ],
        specialAssignments: function(roster) {
            let mSkull = [];
            let mCross = [];
            let rSkull = [];
            let rCross = [];
            
            const melees = roster.players.filter(player => player.role === "Melee");
            const ranged = roster.players.filter(player => player.role === "Ranged");

            for (let i = 0; i < melees.length; i++) {
                if (i % 2 === 0) {
                    mSkull.push(melees[i]);
                } else {
                    mCross.push(melees[i]);
                }
            }

            for (let i = 0; i < ranged.length; i++) {
                if (i % 2 === 0) {
                    rSkull.push(ranged[i]);
                } else {
                    rCross.push(ranged[i]);
                }
            }

            return `Melee targets:\nSkull: ${mSkull.map(player => player.name).join(", ")}\nCross: ${mCross.map(player => player.name).join(", ")}\n` +
                   `Ranged start targets:\nSkull: ${rSkull.map(player => player.name).join(", ")}\nCross: ${rCross.map(player => player.name).join(", ")}\n`;
        }
    }
}
