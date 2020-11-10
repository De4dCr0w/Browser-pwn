git checkout 830f2e892431f6fea022f09f70f2f187950267b7
cd Source/JavaScriptCore/dfg
cp DFGAbstractInterpreterInlines.h DFGAbstractInterpreterInlines__patch.h
git apply < ./patch.diff
cp DFGAbstractInterpreterInlines__patch.h DFGAbstractInterpreterInlines.h
cd ../../../