""""
-86 - -41 - 90 - 4 + 6 + -70 - +d = 83
r - 16 = -81 + -16 - -74 + 25 - -86

"""
operators = [" + ", " - "]
#verifier position de l'inconnu
def operate(expression):
    #copy a string
    c = expression[:]
    L = []
    print(list(c))
    item =""
    for i in range(0, len(c)):
        if(c[i]!=" "):
            item += c[i]
        if(c[i]==" "):
            L+= [item]
            item = ""
            
            L += [c[i+1]]
    
    
operate("-86 - -41 - 90 - 4 + 6 + -70")
    


#additionner var gauche et var droite 