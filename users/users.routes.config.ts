import express from 'express'

import {CommonRoutesConfig} from '../common/common.routes.config'

export class UserRoutes extends CommonRoutesConfig {
    constructor(app:express.Application) {
        super(app, 'UserRoutes')
    }
}