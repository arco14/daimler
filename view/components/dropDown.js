function loadDropDown(strComponente, intKey, strData, arrayColumns, arraySummary, blnAutoWith, blnValidacion, blnReadOnly) {
    let dataGrid
    const makeAsyncDataSource = () => new DevExpress.data.CustomStore({
        loadMode: 'raw',
        key: intKey,
        load: () => strData
    })
    const createDataGrid = (e, value) => {
        const $dataGrid = $('<div>').dxDataGrid({
            dataSource: e.component.getDataSource(),
            columns: arrayColumns,
            hoverStateEnabled: true,
            allowColumnResizing: true,
            allowSorting: true,
            allowFiltering: true,
            columnAutoWidth: blnAutoWith,
            showBorders: true,
            showColumnLines: true,
            showRowLines: true,
            rowAlternationEnabled: true,
            closeOnOutsideClick: true,
            paging: { enabled: true, pageSize: 15 },
            searchPanel: { visible: true, highlightCaseSensitive: true },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [15, 30, 45, 100, 200],
                showInfo: true,
            },
            filterRow: { visible: true, applyFilter: 'auto' },
            scrolling: { mode: 'virtual' },
            selection: { mode: 'single' },
            summary: { totalItems: arraySummary },
            grouping: { autoExpandAll: true },
            columnFixing: { enabled: true },
            selectedRowKeys: [value],
            height: '100%',
            onSelectionChanged(selectedItems) {
                const keys = selectedItems.selectedRowKeys
                const hasSelection = keys.length
                e.component.option('value', hasSelection ? keys[0] : null)
            },
        })

        dataGrid = $dataGrid.dxDataGrid('instance')

        e.component.on('valueChanged', (args) => {
            dataGrid.selectRows(args.value, false)
            e.component.close()
        })

        return $dataGrid
    }

    const dropDownConfig = {
        valueExpr: intKey,
        deferRendering: false,
        placeholder: 'Selecciona',
        searchEnabled: true,
        readOnly: blnReadOnly,
        displayExpr: (item) => item && `${item.NOMBRE}`,
        showClearButton: !blnValidacion,
        dataSource: makeAsyncDataSource(),
        contentTemplate(e) {
            const value = e.component.option('value')
            return createDataGrid(e, value)
        }
    }

    const $dropDown = $(strComponente).dxDropDownBox(dropDownConfig)

    if (blnValidacion) {
        $dropDown.dxValidator({
            validationRules: [{
                type: 'required',
                message: 'Este campo no puede ir vacío',
            }],
        })
    }
}
