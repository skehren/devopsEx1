var Transfer= parseInt(context.variableManager.getValue("TS"))-parseInt(context.variableManager.getValue("TS_E"));
context.variableManager.setValue("TransferTime",Transfer);
logger.debug("Calcul:"+Transfer);