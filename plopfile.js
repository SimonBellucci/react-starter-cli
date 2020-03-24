const appPath = 'src/app';
const componentsPath = 'src/components';
const routerPath = 'src/router';
const pagesPath = 'src/pages';

module.exports = plop => {

    /**
     * Component
     */
    plop.setGenerator('component', {
        description: 'Créer un composant',

        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Quel est le nom du composant ?',
                validate: value => {
                    if (!value) {
                        return "Le nom du composant est requis";
                    }
                    return true;
                }
            },
        ],
        actions: [
            {
                type: 'add',
                path: `${componentsPath}/{{pascalCase name}}/{{pascalCase name}}.js`,
                templateFile: 'templates/component/component.js.hbs',
                skipIfExists: true
            },
            {
                type: 'add',
                path: `${componentsPath}/{{pascalCase name}}/{{pascalCase name}}.scss`,
                templateFile: 'templates/component/component.scss.hbs',
                skipIfExists: true
            }
        ],
    });

    /**
     * Page
     */
    plop.setGenerator('page', {
        description: 'Créer une page',

        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Quel est le nom de la page ?',
                validate: value => {
                    if (!value) {
                        return "Le nom de la page est requis";
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'dynamic',
                message: 'Si la page est dynamique, renseigner le paramètre',
            },
        ],
        actions: function(data) {
            let actions = [
                {
                    type: 'add',
                    path: `${routerPath}/routes.js`,
                    templateFile: 'templates/router/routes.js.hbs',
                    skipIfExists: true
                },
                {
                    type: 'add',
                    path: `${routerPath}/Router.js`,
                    templateFile: 'templates/router/router.js.hbs',
                    skipIfExists: true
                },
                {
                    type: 'modify',
                    path: `${appPath}/App.js`,
                    pattern: `{/* PLOP_ADD_ROUTER */}`,
                    template: 'import Router from "../router/Router";',
                },
                {
                    type: 'modify',
                    path: `${appPath}/App.js`,
                    pattern: `{/* PLOP_MODIFY_ROUTER */}`,
                    template: '<Router/>',
                },
                {
                    type: 'append',
                    path: `${routerPath}/routes.js`,
                    pattern: `/* PLOP_INJECT_IMPORT */`,
                    template: `import {{pascalCase name}} from '../pages/{{pascalCase name}}/{{pascalCase name}}';`,
                },
                {
                    type: 'append',
                    path: `${routerPath}/routes.js`,
                    pattern: `/* PLOP_INJECT_OBJECT */`,
                    templateFile: 'templates/router/routeObject.js.hbs'
                },
                {
                    type: 'add',
                    path: `${pagesPath}/{{pascalCase name}}/{{pascalCase name}}.scss`,
                    templateFile: 'templates/page/page.scss.hbs',
                    skipIfExists: true
                }
            ];

            if(data.dynamic) {
                actions = actions.concat([
                    {
                        type: 'append',
                        path: `${routerPath}/routes.js`,
                        pattern: `/* PLOP_INJECT_OBJECT */`,
                        templateFile:'templates/router/routeObjectDynamic.js.hbs'
                    },
                    {
                        type: 'add',
                        path: `${pagesPath}/{{pascalCase name}}/{{pascalCase name}}.js`,
                        templateFile: 'templates/page/pageDynamic.js.hbs',
                        skipIfExists: true
                    },
                ]);
            }
            else{
                actions = actions.concat([
                    {
                        type: 'add',
                        path: `${pagesPath}/{{pascalCase name}}/{{pascalCase name}}.js`,
                        templateFile: 'templates/page/page.js.hbs',
                        skipIfExists: true
                    },
                ])
            }

            return actions;
        }
    });
};