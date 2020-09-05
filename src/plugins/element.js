import Vue from 'vue'
import {
    Button,
    Input,
    Form,
    FormItem, 
    message, 
    Container, 
    Header, 
    Aside, 
    Main, 
    Menu, 
    Submenu, 
    MenuItem, 
    Breadcrumb, 
    BreadcrumbItem, 
    Row, 
    Col, 
    card, 
    Table, 
    TableColumn, 
    tooltip, 
    Switch, 
    Pagination, 
    Dialog,
    MessageBox,
    ButtonGroup,
    Tag,
    Drawer,
    Tree,
    Select,
    Option,
    Cascader,
    Alert,
    Tabs,
    TabPane,
    Step,
    Steps,
    CheckboxGroup,
    Checkbox,
    Upload,
    Timeline,
    TimelineItem
} from 'element-ui'

Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(CheckboxGroup)
Vue.use(Tabs)
Vue.use(Step)
Vue.use(Steps)
Vue.use(TabPane)
Vue.use(Button)
Vue.use(Alert)
Vue.use(Cascader)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(tooltip)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(ButtonGroup)
Vue.use(Tag)
Vue.use(Drawer)
Vue.use(Tree)
Vue.prototype.$message = message;
Vue.prototype.$confirm = MessageBox.confirm;