const sampleProject = new Project({
title: "Kitten 4",
image: "images/kitten-4.jpg",
link: "About Kitten 4",
description: "Demo description about kitten 4"
});
sampleProject.save().then(() => console.log("Sample project saved!"));
