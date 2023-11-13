duplicatedBase = []
ConnectionRefusedError = 0
def numNitrogenousBase(dnaString):
    for i in dnaString:
        if i not in dnaString:  
            duplicatedBase.append(i)
            count =+ i
        else:
            pass
    print(duplicatedBase.count)
