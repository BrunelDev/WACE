""""
-86 - -41 - 90 - 4 + 6 + -70 - +d = 83
r - 16 = -81 + -16 - -74 + 25 - -86

"""
operators = ["+", "-"]
#verifier position de l'inconnu
def operate(expression):
    #copy a string
    c = expression[:]
    L = []
    item =""
    for i in range(0, len(c)):
        if(c[i]!=" " or(c[i] in operators and c[i+1] !=" ")):
            item += c[i] !=" "
        if(c[i]==" " and c[i+1] in operators and c[i+2]==" "):
            
            L+= [item]
            item = ""
            
            L += [c[i+1]]
    print(L)
    
    
    
operate("-86 - -41 - 90 - 4 + 6 + -70")
    


#additionner var gauche et var droite 