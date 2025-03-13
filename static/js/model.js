// Belbin Role Assignment Model

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
            description: "Outgoing, enthusiastic, and communicative. Explores opportunities and develops contacts."
        },
        {
            name: "Team Worker",
            description: "Cooperative, perceptive, and diplomatic. Listens and builds relationships."
        },
        {
            name: "Co-Ordinator",
            description: "Mature, confident, and identifies talent. Clarifies goals and delegates effectively."
        },
        {
            name: "Plant",
            description: "Creative, imaginative, and free-thinking. Generates ideas and solves difficult problems."
        },
        {
            name: "Monitor Evaluator",
            description: "Strategic and discerning. Sees all options and judges accurately."
        },
        {
            name: "Specialist",
            description: "Dedicated and focused. Brings in-depth knowledge in a key area."
        },
        {
            name: "Shaper",
            description: "Challenging, dynamic, and thrives on pressure. Has the drive to overcome obstacles."
        },
        {
            name: "Implementer",
            description: "Practical, reliable, and efficient. Turns ideas into actions."
        },
        {
            name: "Completer Finisher",
            description: "Painstaking, conscientious, and anxious. Searches for errors and perfects tasks."
        },
    ]
};

export default model;
