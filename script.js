function calculateAttendance() {
    let lecture = document.getElementById("lecture").value;
    let tutorial = document.getElementById("tutorial").value;
    let practical = document.getElementById("practical").value;
    let skilling = document.getElementById("skilling").value;

    // Convert values to numbers, and default to null if empty
    lecture = lecture ? parseFloat(lecture) : null;
    tutorial = tutorial ? parseFloat(tutorial) : null;
    practical = practical ? parseFloat(practical) : null;
    skilling = skilling ? parseFloat(skilling) : null;

    // Define weights
    let weightage = { lecture: 1, tutorial: 0.25, practical: 0.5, skilling: 0.25 };
    
    let totalWeight = 0;
    let totalScore = 0;

    // Calculate only for provided inputs
    if (lecture !== null) {
        totalScore += lecture * weightage.lecture;
        totalWeight += weightage.lecture;
    }
    if (tutorial !== null) {
        totalScore += tutorial * weightage.tutorial;
        totalWeight += weightage.tutorial;
    }
    if (practical !== null) {
        totalScore += practical * weightage.practical;
        totalWeight += weightage.practical;
    }
    if (skilling !== null) {
        totalScore += skilling * weightage.skilling;
        totalWeight += weightage.skilling;
    }

    // Avoid division by zero
    let weightedAvg = totalWeight > 0 ? (totalScore / totalWeight) : 0;

    let result = document.getElementById("result");
    let message = document.getElementById("message");
    let celebration = document.getElementById("celebration");
    
    result.innerText = `Your Attendance: ${weightedAvg.toFixed(2)}%`;
    celebration.innerHTML = ""; // Clear previous celebrations

    if (weightedAvg >= 80) {
        // Success styling
        message.style.color = "#00ff00";
        message.innerHTML = "🎉 Stellar Attendance!";
        result.style.transform = "scale(1.1)";
        message.style.transform = "scale(1.1)";
        
        // Confetti celebration
        for (let i = 0; i < 80; i++) {
            let confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.setProperty("--hue", Math.random() * 360);
            confetti.style.setProperty("--duration", `${Math.random() * 2 + 1.5}s`);
            celebration.appendChild(confetti);
        }

        // Sparkle effects
        for (let i = 0; i < 20; i++) {
            let sparkle = document.createElement("div");
            sparkle.className = "sparkle";
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${Math.random() * 1}s`;
            celebration.appendChild(sparkle);
        }

        // Bounce animation for result
        result.style.animation = "bounce 0.5s ease infinite";
        setTimeout(() => {
            result.style.animation = "none";
            result.style.transform = "scale(1)";
            message.style.transform = "scale(1)";
        }, 2000);

        // Glow effect on container
        document.querySelector(".container").style.boxShadow = "0 0 50px rgba(0, 255, 0, 0.7)";
        setTimeout(() => {
            document.querySelector(".container").style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        }, 2000);
    } else if (weightedAvg < 75) {
        message.style.color = "#ff0000";
        message.innerHTML = "⚠️ Attendance Alert!";
        celebration.innerHTML = "📉 Work on your attendance!";
        celebration.style.color = "#ff0000";
        celebration.style.fontSize = "1.2rem";
    } else {
        message.style.color = "#ffd700";
        message.innerHTML = "👍 Good Effort!";
        celebration.innerHTML = "";
    }
}