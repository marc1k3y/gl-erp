import { combineReducers, createStore } from "redux"
import { AuthReducer } from "./auth/reducer"
import { UpdaterReducer } from "./updater/reducer"
import { PeriodReducer } from "./period/reducer"
import { AddTeamForFarmerReducer } from "./addTeamForFarmer/reducer"
import { ModalsReducer } from "./modals/reducer"
import { FarmerBuyerTablesReducer } from "./farmerBuyerTables/reducer"
import { TablesVisibleReducer } from "./tablesVisible/reducer"
import { FileUploadReducer } from "./fileUpload/reducer"

const rootReducer = combineReducers({
    auth: AuthReducer,
    farmerBuyerTables: FarmerBuyerTablesReducer,
    addTeamForFarmer: AddTeamForFarmerReducer,
    modals: ModalsReducer,
    updater: UpdaterReducer,
    period: PeriodReducer,
    tablesVisible: TablesVisibleReducer,
    fileUpload: FileUploadReducer
})

export const store = createStore(rootReducer)