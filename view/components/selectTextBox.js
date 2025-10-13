async function loadSelectTextBox(
    blnSoloLista,
    strComponente,
    arrayData,
    strKeyExpr,
    strPlaceholder,
    strSearchExpr,
    blnSeleccionados,
    strValueTextbox,
    arraySubList,
    strTipoComponente,
    strDisplayExprSub,
    strKeyExprSub,
    strGetter
) {
    const filteredData = arrayData.map(item => ({ ...item }))

    let selectedItemKeys = []
    if (blnSeleccionados) {
        selectedItemKeys = filteredData.map(item => item[strKeyExpr])
        filteredData.forEach(item => (item.selected = true))
    } else {
        filteredData.forEach(item => (item.selected = false))
    }

    const baseConfig = {
        dataSource: filteredData,
        keyExpr: strKeyExpr,
        displayExpr: strSearchExpr,
        selectionMode: "multiple",
        showSelectionControls: true,
        searchEnabled: true,
        searchExpr: strSearchExpr,
        selectedItemKeys
    }

    const onSelectionChanged = function (e) {
        const list = e.component
        const selectedKeys = list.option("selectedItemKeys")

        filteredData.forEach(item => {
            const wasSelected = !!item.selected
            item.selected = selectedKeys.includes(item[strKeyExpr])

            if (wasSelected !== item.selected) {
                const index = filteredData.findIndex(d => d[strKeyExpr] === item[strKeyExpr])
                const $itemEl = list.itemElements().eq(index)
                const $expander = $itemEl.find(".item-expander")

                if (item.selected) {
                    // EXPAND: si no tiene contenido lo creamos e initializamos widgets
                    if ($expander.children().length === 0) {
                        // TEXTBOX
                        if (strTipoComponente === "textBox" || strTipoComponente === "ambos") {
                            if (item[strValueTextbox] === undefined) item[strValueTextbox] = ""

                            const $textBoxWrap = $("<div>")
                                .addClass("expander-textbox my-2")
                                .dxTextBox({
                                    value: item[strValueTextbox],
                                    placeholder: strPlaceholder,
                                    onValueChanged: function (ev) {
                                        item[strValueTextbox] = ev.value
                                    }
                                })

                            $textBoxWrap.on("dxclick", ev => ev.stopPropagation())
                            $expander.append($textBoxWrap)
                        }

                        // SUBLIST
                        if (strTipoComponente === "list" || strTipoComponente === "ambos") {
                            if (!item.itemsSelected) item.itemsSelected = []

                            const $subListWrap = $("<div>")
                                .addClass("expander-sublist mt-2 border p-2 rounded bg-gray-50")
                                .dxList({
                                    dataSource: arraySubList || [],
                                    selectionMode: "multiple",
                                    showSelectionControls: true,
                                    searchEnabled: true,
                                    searchExpr: strDisplayExprSub,
                                    displayExpr: strDisplayExprSub,
                                    keyExpr: strKeyExprSub,
                                    selectedItemKeys: item.itemsSelected,
                                    onSelectionChanged: function (ev) {
                                        item.itemsSelected = ev.component.option("selectedItemKeys")
                                    }
                                })

                            $subListWrap.on("dxclick", ev => ev.stopPropagation())
                            $expander.append($subListWrap)
                        }
                    }

                    // mostrar con animación (opcional)
                    $expander.stop(true, true).slideDown(150)
                } else {
                    // COLLAPSE: ocultar y eliminar widgets para liberar recursos
                    $expander.stop(true, true).slideUp(150, function () {
                        // destruir instancias DevExtreme si existen (por seguridad)
                        $expander.find(".expander-sublist").each(function () {
                            try {
                                const inst = $(this).dxList("instance")
                                if (inst && typeof inst.dispose === "function") inst.dispose()
                            } catch (err) { /* ignore */ }
                            $(this).remove()
                        })
                        $expander.find(".expander-textbox").each(function () {
                            try {
                                const inst = $(this).dxTextBox("instance")
                                if (inst && typeof inst.dispose === "function") inst.dispose()
                            } catch (err) { /* ignore */ }
                            $(this).remove()
                        })
                    })
                }
            }
        })
    }

    // itemTemplate: siempre renderamos contenedor .item-expander (vacío si no seleccionado)
    const itemTemplate = function (data) {
        const $container = $("<div>").addClass("list-item")
        const $label = $("<div>").text(data[strSearchExpr]).addClass("font-semibold mb-1")
        $container.append($label)

        // contenedor para el contenido expandible (inicialmente visible solo si data.selected)
        const $expander = $("<div>")
            .addClass("item-expander")
            .css("display", data.selected ? "block" : "none")

        // Si el item ya viene seleccionado, inicializamos su contenido aquí
        if (data.selected) {
            if (strTipoComponente === "textBox" || strTipoComponente === "ambos") {
                if (data[strValueTextbox] === undefined) data[strValueTextbox] = ""

                const $textBoxWrap = $("<div>")
                    .addClass("expander-textbox my-2")
                    .dxTextBox({
                        value: data[strValueTextbox],
                        placeholder: strPlaceholder,
                        onValueChanged: function (ev) {
                            data[strValueTextbox] = ev.value
                        }
                    })

                $textBoxWrap.on("dxclick", ev => ev.stopPropagation())
                $expander.append($textBoxWrap)
            }

            if (strTipoComponente === "list" || strTipoComponente === "ambos") {
                if (!data.itemsSelected) data.itemsSelected = []

                const $subListWrap = $("<div>")
                    .addClass("expander-sublist mt-2 border p-2 rounded bg-gray-50")
                    .dxList({
                        dataSource: arraySubList || [],
                        selectionMode: "multiple",
                        showSelectionControls: true,
                        searchEnabled: true,
                        searchExpr: strDisplayExprSub,
                        displayExpr: strDisplayExprSub,
                        keyExpr: strKeyExprSub,
                        selectedItemKeys: data.itemsSelected,
                        onSelectionChanged: function (ev) {
                            data.itemsSelected = ev.component.option("selectedItemKeys")
                        }
                    })

                $subListWrap.on("dxclick", ev => ev.stopPropagation())
                $expander.append($subListWrap)
            }
        }

        $container.append($expander)
        return $container
    }

    // Inicializar lista
    if (filteredData.length === 0) {
        $(strComponente).dxList(baseConfig)
        const listInstance = $(strComponente).dxList("instance")
        listInstance.option("dataSource", [])
        listInstance.unselectAll()
        return
    }

    if (blnSoloLista) {
        $(strComponente).dxList({
            ...baseConfig,
            onSelectionChanged
        })
        window[`getFinalData${strGetter}`] = () => filteredData
    } else {
        $(strComponente).dxList({
            ...baseConfig,
            onSelectionChanged,
            itemTemplate
        })
        window[`getFinalData${strGetter}`] = () => filteredData
    }
}
