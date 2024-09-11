import { generateNotesFromTemplate } from "./templates/phaseOne.js";
export const getEncodedNotes = (data) => {
  const roster = generateDictionary(data);
  const notes = generateNotesFromTemplate(roster);
  //const encodedNotes = btoa(unenscape(encodeURIComponent(JSON.stringify(notes))));
  //return encodedNotes;
  return JSON.stringify(notes);
};

export const generateDictionary = (data) => {
  const roles = {
    RDruid: 25,
    Holy: 25,
    Disc: 25,
    RShaman: 25,
    Arms: 25,
    UHDK: 25,
  }

  let roster = {};
  Object.keys(roles).forEach((role) => {
    for (let i = 1; i <= roles[role]; i++) {
      roster[`${role}${i}`] = "MISSING";
    }
  });

  let counters = Object.keys(roles).reduce((acc, role) => ({ ...acc, [role]: 1 }), {});

  const classSpecToRole = {
    "Priest:Discipline": "Disc",
    "Druid:Restoration": "RDruid",
    "Shaman:Restoration1": "RShaman",
    "Paladin:Holy1": "Holy",
    "DK:Unholy_DPS": "UHDK",
    "Warrior:Arms": "Arms"
  };

  data.raidDrop.slice(0, 25).forEach(player => {
    const key = `${player.class}:${player.spec}`;
    const role = classSpecToRole[key];
    if (role && counters[role] <= roles[role]) {
      roster[`${role}${counters[role]}`] = player.name;
      counters[role] += 1;
    }
  });

  return roster;
};
