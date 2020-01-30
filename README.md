# JQuery Menu Plugin

## For Developers

### Before Start

#### Requirements

* Any Web Browser you want (Highly recommended one with an update in the last 5 years)
* Any IDE you want
* At least 1 HTML file
* At least 1 JavaScript file
* JQuery 3.4.1 at least (Not tested in other versions)
* At least 1 CSS file (Highly recommended, but not necessary)

Before you start using the menu its required use these three lines on your HTML file:
```HTML
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="(The source of your JS file)"></script>
    <script src="jQuery.Menu.js"></script>
```
Your JavaScript file should look at least like this:

```JS
$(window).on("load", function () {
    // Your code here
})
```

And With that you are ready to start coding.

#### Things you should know

When you create a new menu it will be added a list in the existing div, header, main, aside...
The ID of the list will be list and the number of list you have created.
Because of that, we do NOT recommend setting the ID of any element with the name "List" joined with a number, submenu or setting the class of an element with navigator.

All elements created by the plugin will have a default ID.

* All the main sections will be with an ID with the name you give it and a number that will be an index representative of when was created
* All the options added to a section will have an id with the name you give it and the index of the option and the same ID as the section that the option is son of.


So after all that things we recommend not using in the menu numbers because all the inside work is made with numbers.

It's also not recommended use classes like navigator, section or submenu because it's already used by the plugin

### Using the plugin

After completing all the requirements you can start the coding calling the function with 

```JS
    $("insert your container here").menu("init");
```
In the first field you should put the container that you want to put the menu

If it's the first menu that you have created it will be created the first list.

So when you want to add a section to the Nth list you use 

```JS
    $("#listn").menu("addSection","insert name here","insert URL here (optional)");
```
After that the list will be with a section with the name you use and the URL you use,
if you do not pass the URL it will be created with the same value as the name

When you want to add an option to the section you will have to call it with his ID (the name + the number of the list)

```JS
    $("#sectionN(list)").menu("addOption","insert name here","insert URL here (optional)");
```
After that the section will be with a option with the name you use and the URL you use,
if you do not pass the URL it will be created with the same value as the name

The option will be created with the ID name_listNumber_numberOfSection.

If you want to delete an option you have to use removeOption 

```JS
    $("#example_1_1").menu("deleteOption");
```
However if you want to delete a section you should use the deleteSection 

```JS
    $("#example1").menu("deleteSection");
```

If you want to modify the attributes of an element you can use the base JQuery methods
```JS
    $("#example1").attr("href","https://api.jquery.com/");
```

It's not recommended change the ID or the classes of the elements created through this plugin.

## For Designers

If you do not want that the site to look like a old website you should use the same classes mentioned before `.navigator` for the top bar, `.section` for the sections and `.submenu` for the submenus.

Probably you can make with this plugin something more beautiful than the demo, because the design part is not the main part of this plugin.

However the plugin does not use any CSS rules apart from `display:block` and `display:none` so you can use it for horizontal and vertical tabs.  