# Experius Form Select Chosen
A module that enabled you to define select and multiselect jQuery chosen fields.

You can get a single select chosen by adding the following code to your field config:
```
	<item name="elementTmpl" xsi:type="string">Experius_FormSelectChosen/selectChosen</item>
    <item name="component" xsi:type="string">Experius_FormSelectChosen/js/component/select.chosen</item>
```

You can get a multiselect chosen by adding the following code to your field config:
```
	<item name="elementTmpl" xsi:type="string">Experius_FormSelectChosen/multiselectChosen</item>
    <item name="component" xsi:type="string">Experius_FormSelectChosen/js/component/multiselect.chosen</item>
```

You could set extra options by using your own elementTmpl. For more information about chosen: [https://harvesthq.github.io/chosen/](https://harvesthq.github.io/chosen/).