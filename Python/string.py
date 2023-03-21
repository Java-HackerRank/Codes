string = '11011'

while len(string) % 4 != 0:
    string = string.zfill(len(string)+1)

parts = [string[i:i+4] for i in range(0,len(string),4)]
print(parts)

    