# Program to convert binary to hex
binary = input("Enter the binary number\n")
hexadecimal = ''

grouping = {'0000':'0','0001':'1','0010':'2','0011':'3','0100':'4','0101':'5','0110':'6','0111':'7','1000':'8','1001':'9','1010':'A',
            '1011':'B', '1100':'C','1101':'D','1110':'E','1111':'F'}

def calculateHex(binary):
    hexadecimal = ''

    if len(binary) == 4 :
        hexadecimal = grouping[binary]
        return hexadecimal
    
    while len(binary) % 4 != 0:
        binary = binary.zfill(len(binary)+1)

    parts = [binary[i:i+4] for i in range(0,len(binary),4)]

    for part in parts:
        hexadecimal += grouping[part]

    return hexadecimal

def calculateHexDecimalPart(decimalPart):
    hexadecimal = ''

    if len(decimalPart) == 4 :
        hexadecimal = grouping[decimalPart]
        return hexadecimal
    
    while len(decimalPart) % 4 != 0:
        decimalPart = decimalPart.ljust(len(decimalPart)+1,"0")

    parts = [decimalPart[i:i+4] for i in range(0,len(decimalPart),4)]

    for part in parts:
        hexadecimal += grouping[part]

    return hexadecimal

def getHexPoint(binary):
    binaryParts = binary.split('.')
    integerPart = binaryParts[0]
    decimalPart = binaryParts[1]

    result = calculateHex(integerPart) + '.' + calculateHexDecimalPart(decimalPart)
    return result
    

def getHex(binary):
    return calculateHex(binary)


hexadecimal = getHexPoint(binary) if binary.__contains__('.') else getHex(binary)

print(hexadecimal)