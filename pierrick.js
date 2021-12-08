var isMigrationDefaultChecked = document.querySelector("input[name=default]");
var isMigrationForeignChecked = document.querySelector("input[name=foreign]");
var isOrderByChecked = document.querySelector("input[name=orderBy]");


isMigrationDefaultChecked.addEventListener( 'change', function() {
    if(this.checked) {
        migration_default.style.display = "inline-block";
    } else {
        migration_default.style.display = "none";
    }
});
isMigrationForeignChecked.addEventListener( 'change', function() {
    if(this.checked) {
        migration_foreign.style.display = "inline-block";
    } else {
        migration_foreign.style.display = "none";
    }
});
isOrderByChecked.addEventListener( 'change', function() {
    if(this.checked) {
        order_by.style.display = "inline-block";
    } else {
        order_by.style.display = "none";
    }
});

function generateRoute() {    
    count = parseInt(document.querySelectorAll(".routes").length)+1;
    item = document.createElement("p");
    item.className = "routes";
    item.id = "route" + count;
    item.innerHTML += "Route::" + action.value + "('" + custom_url.value + "', '" + routeController.value + "@" +  method.value + "');<br>";
    document.getElementById('route').appendChild(item);
    // custom_url.value + controller.value + method.value;
}

function generateMigration() {
    document.getElementById('migration').innerHTML += "$table->" + type.value + "('" + column.value + "')";
    if (document.querySelector('input[name="unsigned"]:checked') ) {
        document.getElementById('migration').innerHTML += "->unsigned()";
    }
    if (document.querySelector('input[name="default"]:checked') ) {
        // à voir selon les préférences de pierrick
        defaultValue = default_value.value;
        if (type.value === "string") {
            defaultValue = "'" + default_value.value + "'";
        }
        document.getElementById('migration').innerHTML += "->default(" + defaultValue + ")";
    }
    if (document.querySelector('input[name="foreign"]:checked') ) {
        document.getElementById('migration').innerHTML += ";<br><pre>$table->foreign('" + column.value + "')<br>   ->references('" + 
        column_ref.value + "')<br>   ->on('" + table.value + "');</pre><br>";
    }
    else {
        document.getElementById('migration').innerHTML += ";<br>";
    }
}

function generateControllerGet() {

    if (document.querySelector('input[name="orderBy"]:checked') ) {
        document.getElementById('controller').innerHTML += "$" + variableGet.value + " = " + model_name.value + "::orderBy('" + 
        orderByCol.value + "')" + "->get();<br>";
    }
    else {
        document.getElementById('controller').innerHTML += "$" + variableGet.value + " = " + model_name.value + "::get();<br>";

    }

}

