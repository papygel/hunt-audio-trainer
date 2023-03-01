window.onload = function() {

    let currentQuestion = {
        weapon : {},
        distance : 0
    };

    const weapons = [
        caldwellRival78 = {
            name : "Caldwell Rival 78",
            string : "caldwell78",
            slot : "large",
            ammo : "shells",
            image : "../img/Caldwell_Rival_78.jpg",
            sounds : ["../sounds/Caldwell_Rival_78_000.mp3", "../sounds/Caldwell_Rival_78_100.mp3", "../sounds/Caldwell_Rival_78_200.mp3", "../sounds/Caldwell_Rival_78_300.mp3", "../sounds/Caldwell_Rival_78_400.mp3", "../sounds/Caldwell_Rival_78_500.mp3"]
        },
        crownNKingAuto5 = {
            name : "Crown & King Auto-5",
            string : "crownnkingauto5",
            slot : "large",
            ammo : "shells",
            image : "../img/Crown_&_King_Auto-5.jpg",
            sounds : ["../sounds/Crown_&_King_Auto-5_000.mp3", "../sounds/Crown_&_King_Auto-5_100.mp3", "../sounds/Crown_&_King_Auto-5_200.mp3", "../sounds/Crown_&_King_Auto-5_300.mp3", "../sounds/Crown_&_King_Auto-5_400.mp3", "../sounds/Crown_&_King_Auto-5_500.mp3"]
        },
        romero77 = {
            name : "Romero 77",
            string : "romero77",
            slot : "large",
            ammo : "shells",
            image: "../img/Romero_77.jpg",
            sounds : ["../sounds/Romero_77_000.mp3", "../sounds/Romero_77_100.mp3", "../sounds/Romero_77_200.mp3", "../sounds/Romero_77_300.mp3", "../sounds/Romero_77_400.mp3", "../sounds/Romero_77_500.mp3"]
        },
        specter1882 = {
            name : "Specter 1882",
            string : "specter1882",
            slot : "large",
            ammo : "shells",
            image: "../img/Specter_1882.jpg",
            sounds : ["../sounds/Specter_1882_000.mp3", "../sounds/Specter_1882_100.mp3", "../sounds/Specter_1882_200.mp3", "../sounds/Specter_1882_300.mp3", "../sounds/Specter_1882_400.mp3", "../sounds/Specter_1882_500.mp3"]
        },
        winfield1887Terminus = {
            name : "Winfield 1887 Terminus",
            string : "winfield1887terminus",
            slot : "large",
            ammo : "shells",
            image: "../img/Winfield_1887_Terminus.jpg",
            sounds : ["../sounds/Winfield_1887_Terminus_000.mp3", "../sounds/Winfield_1887_Terminus_100.mp3", "../sounds/Winfield_1887_Terminus_200.mp3", "../sounds/Winfield_1887_Terminus_300.mp3", "../sounds/Winfield_1887_Terminus_400.mp3", "../sounds/Winfield_1887_Terminus_500.mp3"]
        }
    ];

    const distances = [0, 100, 200, 300, 400, 500];

    function initSettings() {
        let settingsBox = document.getElementById("settings");

        weapons.forEach(weapon => {
            let div = document.createElement("div");

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = weapon.string;
            checkbox.checked = true;

            let label = document.createElement("label");
            label.for = weapon.string;
            label.innerHTML = weapon.name;

            div.appendChild(checkbox);
            div.appendChild(label);
            settingsBox.appendChild(div);
        })
    }

    function playWeaponSound() {
        let weapon = currentQuestion.weapon;
        let distance = currentQuestion.distance;
        let soundIndex = distances.indexOf(distance);
        let sound = new Audio(weapon.sounds[soundIndex]);
        sound.play();
    }

    function loadNewQuestion() {
        let selectedWeapons = [];
        let settings = Array.from(document.getElementsByTagName("input"));

        settings.forEach(setting => {
            if (setting.checked === true) {
                let weapon = weapons.find(weapon => weapon.string === setting.name);
                selectedWeapons.push(weapon);
            }
        });

        let weapon = selectedWeapons[Math.floor(Math.random() * selectedWeapons.length)];
        let distance = distances[Math.floor(Math.random() * distances.length)];
        currentQuestion.weapon = weapon;
        currentQuestion.distance = distance;

        let correctAnswer = document.getElementById("correct-answer");
        correctAnswer.innerHTML = "";
        let weaponImage = document.getElementById("weapon-image");
        weaponImage.src = "../img/weapon_placeholder.jpg";
    }

    function displayAnswer() {
        let answerText = "This is a " + currentQuestion.weapon.name + ", fired " + currentQuestion.distance + " metres away.";
        let correctAnswer = document.getElementById("correct-answer");
        correctAnswer.innerHTML = answerText;
        let weaponImage = document.getElementById("weapon-image");
        weaponImage.src = currentQuestion.weapon.image;
    }

    initSettings();
    
    document.getElementById("next").addEventListener("click", loadNewQuestion);
    document.getElementById("shoot").addEventListener("click", playWeaponSound);
    document.getElementById("answer").addEventListener("click", displayAnswer);

    loadNewQuestion();
};