class Tooltip{}

class ProjectItem{
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', this.updateProjectListsHandler);
    }

    connectMoreInfoButton() {
        
    }
}

class ProjectList{
    projects = [];

    constructor(type) {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        console.log(prjItems);
        for (const prjItem of prjItems) {
            this.projects.push(
                new ProjectItem(prjItem.id, this.switchProject.bind(this))
);
        }
        console.log(this.projects);
    }

    addProject(project) {
        // Logic to add a new project
        this.projects.push(project);
    }   

    switchProject(projectId) {
        // Logic to switch project status
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }   
}

class App{
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction(
            finishedProjectList.addProject.bind(finishedProjectList)
        );

        finishedProjectList.setSwitchHandlerFunction(
            activeProjectList.addProject.bind(activeProjectList)
        );
    }
}

App.init();