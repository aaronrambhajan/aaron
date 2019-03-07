const trashFolder = 'trash-field-study';
const adhdFolder = 'ADHD';
const hbFolder = 'heartbeats';

const images = {
  trash: {
    intro_throwing_out_gif: require(`./${trashFolder}/throwing-out.gif`),
    methodology_scope: require(`./${trashFolder}/methodology-scope.svg`),
    methodology_label_change: require(`./${trashFolder}/methodology-label-change.svg`),
    field_logo: require(`./${trashFolder}/field-logo.png`),
    field_iterations: require(`./${trashFolder}/field-iterations.svg`),
    field_timeline: require(`./${trashFolder}/field-timeline.svg`),
    field_processing: require(`./${trashFolder}/field-processing.svg`),
    psych_mt_gif: require(`./${trashFolder}/mouse-tracking.gif`),
    psych_rc_gif: require(`./${trashFolder}/trash-exp1.gif`),
    psych_rc_results1: require(`./${trashFolder}/exp1results1.png`),
    psych_rc_results2: require(`./${trashFolder}/exp1results2.png`),
    awards_collaborators: require(`./${trashFolder}/collaborators.png`),
  },
  adhd: {
    app_asana: require(`./${adhdFolder}/Asana`),
    app_trello: require(`./${adhdFolder}/Trello`),
    app_todoist: require(`./${adhdFolder}/Todoist`),
    app_up_gif: require(`./${adhdFolder}/up-gif.gif`),
    app_team_photo: require(`./${adhdFolder}/the-team.jpeg`),
    story_natalia_normal: require(`./${adhdFolder}/natalia-normal.png`),
    story_natalia_anxious: require(`./${adhdFolder}/natalia-anxious.png`),
    story_messy_room_full: require(`./${adhdFolder}/natalia-room-adhd.gif`),
    story_messy_room_empty: require(`./${adhdFolder}/messy-room-blank.png`),
    story_text_anxious: require(`./${adhdFolder}/text-anxious.gif`),
    process_research_stats: require(`./${adhdFolder}/research-stats.svg`),
    process_empathy_maps: require(`./${adhdFolder}/empathy-map.png`),
    process_big_ideas: require(`./${adhdFolder}/big-ideas.svg`),
    process_phone: require(`./${adhdFolder}/full-1.png`),
  },
  hb: {
    heartbeats_gif: require(`./${hbFolder}/exp1.gif`),
  },
};

export default images;
