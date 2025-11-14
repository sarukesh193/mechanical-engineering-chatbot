const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Mechanical Engineering knowledge base
const knowledge = {
    cad: ["cad", "solidworks", "autocad", "catia", "fusion", "inventor", "design", "modeling", "3d", "drawing"],
    cnc: ["cnc", "machining", "milling", "turning", "lathe", "g-code", "tool path", "feeds", "speeds"],
    materials: ["material", "steel", "aluminum", "plastic", "metal", "alloy", "properties", "strength"],
    manufacturing: ["manufacturing", "production", "assembly", "process", "fabrication", "welding"],
    calculations: ["calculate", "formula", "stress", "strain", "force", "torque", "power", "pressure"],
    mechanics: ["mechanics", "dynamics", "statics", "kinematics", "motion", "velocity"],
    thermodynamics: ["heat", "temperature", "thermal", "thermodynamics", "entropy"],
    help: ["help", "what can you do", "features", "assist"]
};

// Response database
function getBotResponse(input) {
    const lowerInput = input.toLowerCase().trim();
    
    // CAD responses
    if (knowledge.cad.some(word => lowerInput.includes(word))) {
        const cadResponses = [
            "CAD (Computer-Aided Design) is essential for mechanical engineering. Popular software includes SolidWorks, AutoCAD, CATIA, and Fusion 360. Are you working on a specific design project?",
            "For 3D modeling, SolidWorks is great for mechanical parts and assemblies. Key features include parametric design, simulation, and detailed drawings. What aspect of CAD interests you?",
            "When creating CAD models, always consider: 1) Design intent, 2) Manufacturing constraints, 3) Assembly requirements, 4) Material selection. Need help with a specific CAD task?",
            "Pro tip: Use sketching best practices - fully define your sketches, use geometric relations, and keep your feature tree organized. Working on any CAD projects?"
        ];
        return cadResponses[Math.floor(Math.random() * cadResponses.length)];
    }
    
    // CNC responses
    if (knowledge.cnc.some(word => lowerInput.includes(word))) {
        const cncResponses = [
            "CNC machining uses computer control for precision manufacturing. Common operations: milling, turning, drilling. Feed rate and spindle speed are critical parameters. What CNC topic interests you?",
            "CNC programming involves G-code commands like G00 (rapid move), G01 (linear interpolation), G02/G03 (circular interpolation). Modern CNC uses CAM software to generate tool paths automatically.",
            "Key CNC considerations: Tool selection, cutting parameters (feed rate, depth of cut, spindle speed), material properties, and surface finish requirements. Need help with CNC programming?",
            "CNC feeds and speeds depend on material hardness, tool material, and desired finish. Use formulas: Cutting Speed (V) = π × D × N / 1000, where D=diameter, N=RPM. Working on a CNC project?"
        ];
        return cncResponses[Math.floor(Math.random() * cncResponses.length)];
    }
    
    // Materials responses
    if (knowledge.materials.some(word => lowerInput.includes(word))) {
        const materialResponses = [
            "Common engineering materials: Steel (high strength, ductile), Aluminum (lightweight, corrosion-resistant), Titanium (high strength-to-weight ratio), Plastics (versatile, low cost). Which material are you considering?",
            "Material properties to consider: Tensile strength, yield strength, hardness, ductility, thermal conductivity, and cost. Selection depends on application requirements and manufacturing process.",
            "Steel grades: Mild steel (1018) for general use, Tool steel (D2, A2) for cutting tools, Stainless steel (304, 316) for corrosion resistance. What's your application?",
            "Aluminum alloys: 6061-T6 (general structural), 7075-T6 (aerospace, high strength), 2024 (aircraft). Each has specific strength and machinability characteristics."
        ];
        return materialResponses[Math.floor(Math.random() * materialResponses.length)];
    }
    
    // Manufacturing responses
    if (knowledge.manufacturing.some(word => lowerInput.includes(word))) {
        const mfgResponses = [
            "Manufacturing processes include: Casting, Forging, Machining, Welding, 3D Printing, Sheet metal forming. Process selection depends on part geometry, material, quantity, and tolerances.",
            "Lean manufacturing principles: Eliminate waste, continuous improvement (Kaizen), Just-in-Time production, and value stream mapping. These improve efficiency and reduce costs.",
            "Quality control is crucial: Use GD&T (Geometric Dimensioning and Tolerancing), CMM inspection, statistical process control. What manufacturing aspect are you working on?",
            "Assembly design tips: Design for manufacturability (DFM), minimize part count, use standard fasteners, consider assembly sequence. This reduces costs and assembly time."
        ];
        return mfgResponses[Math.floor(Math.random() * mfgResponses.length)];
    }
    
    // Calculations responses
    if (knowledge.calculations.some(word => lowerInput.includes(word))) {
        const calcResponses = [
            "Key engineering formulas: Stress (σ) = Force/Area, Strain (ε) = ΔL/L, Young's Modulus (E) = Stress/Strain. Torque (T) = Force × Distance. Power (P) = Torque × Angular velocity. Need specific calculations?",
            "For beam bending: Maximum stress = (M × c) / I, where M=moment, c=distance to neutral axis, I=moment of inertia. Deflection depends on load type and support conditions.",
            "Pressure calculations: P = F/A (basic), Fluid pressure: P = ρgh (hydrostatic), Flow: Q = A × V. For gases, use ideal gas law: PV = nRT. What are you calculating?",
            "Factor of Safety (FOS) = Ultimate Strength / Working Stress. Typical FOS: 2-3 for static loads, 4-6 for dynamic loads, higher for critical applications. What's your design challenge?"
        ];
        return calcResponses[Math.floor(Math.random() * calcResponses.length)];
    }
    
    // Mechanics responses
    if (knowledge.mechanics.some(word => lowerInput.includes(word))) {
        return "Mechanics fundamentals: Statics (equilibrium, force balance), Dynamics (motion, acceleration), Kinematics (position, velocity). Key equations: F=ma, ΣF=0 (equilibrium), v=u+at. What topic in mechanics?";    }
    
    // Thermodynamics responses
    if (knowledge.thermodynamics.some(word => lowerInput.includes(word))) {
        return "Thermodynamics laws: 1st Law (energy conservation), 2nd Law (entropy), 0th Law (thermal equilibrium). Heat transfer: Conduction (Q=kAΔT/L), Convection (Q=hAΔT), Radiation. Need help with thermal analysis?";
    }
    
    // Help
    if (knowledge.help.some(word => lowerInput.includes(word))) {
        return "I can help with: ⚙️ CAD modeling & design, 🔧 CNC machining & programming, 🔩 Material selection & properties, 🏭 Manufacturing processes, 📐 Engineering calculations, 🔬 Mechanics & thermodynamics. Ask me anything about mechanical engineering!";
    }
    
    // Greetings
    if (/\b(hi|hello|hey|greetings)\b/i.test(lowerInput)) {
        return "Hello! I'm your Mechanical Engineering Assistant. I can help with CAD, CNC, materials, manufacturing, and engineering calculations. What would you like to learn about?";
    }
    
    // Thanks
    if (/\b(thanks|thank you|appreciate)\b/i.test(lowerInput)) {
        return "You're welcome! Feel free to ask any mechanical engineering questions. I'm here to help!";
    }
    
    // Default responses
    const defaults = [
        "Interesting question! Could you be more specific about the mechanical engineering topic? Try asking about CAD, CNC, materials, or calculations.",
        "I specialize in mechanical engineering topics like design, manufacturing, and analysis. Could you rephrase your question in terms of these areas?",
        "That's outside my expertise area. I'm best at helping with CAD modeling, CNC machining, material selection, and engineering calculations. What would you like to know?",
        "Let me help you better! I can assist with: CAD design, CNC programming, material properties, manufacturing processes, and engineering calculations. What interests you?"
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
}

// Add message to chat
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageText = document.createElement('span');
    messageText.className = 'message-text';
    messageText.textContent = text;
    
    messageDiv.appendChild(messageText);
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Handle sending message
function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, true);
    userInput.value = '';
    
    // Show bot response with slight delay
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, false);
    }, 600);
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Focus input on load
userInput.focus();
