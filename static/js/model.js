const model = {
    roles: {
        resourceInvestigator: 0,
        teamWorker: 0,
        coOrdinator: 0,
        plant: 0,
        monitorEvaluator: 0, 
        specialist: 0,
        shaper: 0,
        implementer: 0,
        completerFinisher: 0,
    },

    questions: {  
        resourceInvestigator: [
            "I proactively build and leverage external relationships to bring new opportunities to my team.",
            "I am energized by exploring new ideas and seeking out fresh perspectives from outside the team.",
            "I effectively communicate and follow up on external opportunities to ensure they are implemented within the team."
        ],
        teamWorker: [
            "I prioritize team harmony and help mediate conflicts to maintain a positive working environment.",
            "I am adaptable and willing to support my teammates, even if it means taking on tasks outside my usual responsibilities.",
            "I actively listen to and consider the opinions of all team members to ensure everyone feels valued."
        ],
        coOrdinator: [
            "I am confident in delegating tasks based on individual strengths within the team.",
            "I ensure that team discussions stay focused on the overall goal.",
            "I help team members feel valued by acknowledging their contributions."
        ],
        plant: [
            "I generate innovative ideas and creative solutions to complex problems.",
            "I prefer to work independently when developing new concepts and strategies.",
            "I sometimes get so focused on ideas that I overlook practical details."
        ],
        monitorEvaluator: [  
            "I analyze situations logically and provide objective feedback based on facts.",
            "I carefully weigh all options before making a decision.",
            "I can be critical when evaluating ideas but ensure my feedback is constructive."
        ],
        specialist: [
            "I bring expert knowledge or skills to the team in a specific area.",
            "I enjoy deep diving into technical or specialized subjects.",
            "I focus on my area of expertise and prefer to contribute detailed knowledge rather than broad ideas."
        ],
        shaper: [
            "I thrive under pressure and push the team to meet challenging goals.",
            "I am comfortable challenging ideas to drive the team forward.",
            "I am highly determined and don’t let obstacles get in the way of success."
        ],
        implementer: [
            "I turn ideas into actionable plans and ensure tasks are completed efficiently.",
            "I prefer structured and organized approaches to work over flexible or spontaneous ones.",
            "I am reliable and committed to ensuring the team’s plans are executed effectively."
        ],
        completerFinisher: [
            "I pay close attention to detail and ensure work is completed to a high standard.",
            "I take responsibility for identifying and correcting small errors before they become bigger issues.",
            "I often double-check work to ensure that nothing has been overlooked."
        ],
    },

    inputs: [], 

    teamModel: [
        {
            name: "Resource Investigator",
            description: [
                "Uses their inquisitive nature to find ideas to bring back to the team.",
                "Strengths: Outgoing, enthusiastic. Explores opportunities and develops contacts.",
                "Allowable weaknesses: Might be over-optimistic, and can lose interest once the initial enthusiasm has passed.",
                "Don't be surprised to find that: They might forget to follow up on a lead."
            ]
        },
        {
            name: "Team Worker",
            description: [
                "Helps the team to gel, using their versatility to identify the work required and complete it on behalf of the team.",
                "Strengths: Co-operative, perceptive and diplomatic. Listens and averts friction.",
                "Allowable weaknesses: Can be indecisive in crunch situations and tends to avoid confrontation.",
                "Don't be surprised to find that: They might be hesitant to make unpopular decisions."
            ]
        },
        {
            name: "Co-Ordinator",
            description: [
                "Needed to focus on the team's objectives, draw out team members and delegate work appropriately.",
                "Strengths: Mature, confident, identifies talent. Clarifies goals.",
                "Allowable weaknesses: Can be seen as manipulative and might offload their own share of the work.",
                "Don't be surprised to find that: They might over-delegate, leaving themselves little work to do."
            ]
        },
        {
            name: "Plant",
            description: [
                "Tends to be highly creative and good at solving problems in unconventional ways.",
                "Strengths: Creative, imaginative, free-thinking, generates ideas and solves difficult problems.",
                "Allowable weaknesses: Might ignore incidentals, and may be too preoccupied to communicate effectively.",
                "Don't be surprised to find that: They could be absent-minded or forgetful."
            ]
        },
        {
            name: "Monitor Evaluator",
            description: [
                "Provides a logical eye, making impartial judgements where required and weighs up the team's options in a dispassionate way.",
                "Strengths: Sober, strategic and discerning. Sees all options and judges accurately.",
                "Allowable weaknesses: Sometimes lacks the drive and ability to inspire others and can be overly critical.",
                "Don't be surprised to find that: They could be slow to come to decisions."
            ]
        },
        {
            name: "Specialist",
            description: [
                "Brings in-depth knowledge of a key area to the team.",
                "Strengths: Single-minded, self-starting and dedicated. They provide specialist knowledge and skills.",
                "Allowable weaknesses: Tends to contribute on a narrow front and can dwell on the technicalities.",
                "Don't be surprised to find that: They overload you with information."
            ]
        },
        {
            name: "Shaper",
            description: [
                "Provides the necessary drive to ensure that the team keeps moving and does not lose focus or momentum.",
                "Strengths: Challenging, dynamic, thrives on pressure. Has the drive and courage to overcome obstacles.",
                "Allowable weaknesses: Can be prone to provocation, and may sometimes offend people's feelings.",
                "Don't be surprised to find that: They could risk becoming aggressive and bad-humoured in their attempts to get things done."
            ]
        },
        {
            name: "Implementer",
            description: [
                "Needed to plan a workable strategy and carry it out as efficiently as possible.",
                "Strengths: Practical, reliable, efficient. Turns ideas into actions and organises work that needs to be done.",
                "Allowable weaknesses: Can be a bit inflexible and slow to respond to new possibilities.",
                "Don't be surprised to find that: They might be slow to relinquish their plans in favour of positive changes."
            ]
        },
        {
            name: "Completer Finisher",
            description: [
                "Most effectively used at the end of tasks to polish and scrutinise the work for errors, subjecting it to the highest standards of quality control.",
                "Strengths: Painstaking, conscientious, anxious. Searches out errors. Polishes and perfects.",
                "Allowable weaknesses: Can be inclined to worry unduly, and reluctant to delegate.",
                "Don't be surprised to find that: They could be accused of taking their perfectionism to extremes."
            ]
        },
    ]
};

export default model;