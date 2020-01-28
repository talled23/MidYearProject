# Tal Ledeniov
# Lab 6.1

from tkinter import *


class Application(Frame):

    def __init__(self, master):
        super(Application, self).__init__(master)
        self.grid()
        self.create_widgets()

    def create_widgets(self):
        Label(self,
              text="Interest Calculator",
              font="Times 18 italic bold",
              bg="#373534",
              fg="yellow"
              ).grid(row=0, column=0, columnspan=2)
        Label(self,
              text="",
              bg='#373534'
              ).grid(row=1, column=0, columnspan=2)

        Label(self,
              text="Principal: ",
              font="Times",
              bg="#373534",
              fg="yellow"
              ).grid(row=2, column=0, sticky=E)

        self.principal_ent = Entry(self, bg="yellow")
        self.principal_ent.grid(row=2, column=1, sticky=W)

        Label(self,
              text="Annual Interest: ",
              font="Times",
              bg="#373534",
              fg="yellow"
              ).grid(row=3, column=0, sticky=E)

        self.annualInt_ent = Entry(self, bg="yellow")
        self.annualInt_ent.grid(row=3, column=1, sticky=W)

        Label(self,
              text="Years: ",
              font="Times",
              bg="#373534",
              fg="yellow"
              ).grid(row=4, column=0, sticky=E)

        self.years_ent = Entry(self, bg="yellow")
        self.years_ent.grid(row=4, column=1, sticky=W)

        Label(self,
              text="# Compounding per Year: ",
              font="Times",
              bg="#373534",
              fg="yellow"
              ).grid(row=5, column=0, sticky=E)

        self.compounding_ent = Entry(self, bg="yellow")
        self.compounding_ent.grid(row=5, column=1, sticky=W)

        Label(self,
              text="",
              bg="#373534"
              ).grid(row=6, column=0, columnspan=2)

        Button(self,
               text="Compound Interest",
               font="Times 10 bold",
               bg="#373534",
               fg="yellow",
               command=self.compound_interest
               ).grid(row=7, column=0, sticky=E)
        Button(self,
               text="Simple Interest",
               font="Times 10 bold",
               command=self.simple_interest,
               bg="#373534",
               fg="yellow"
               ).grid(row=7, column=1, sticky=W)

        Label(self,
              text="",
              bg="#373534",
              fg="yellow"
              ).grid(row=8, column=0, columnspan=2)

        self.answerLbl = Label(self, text="", bg="#373534", fg="yellow", font="Impact 20")
        self.answerLbl.grid(row=9, column=0, columnspan=2)

    def compound_interest(self):
        P = float(self.principal_ent.get())
        R = float(self.annualInt_ent.get())
        R /= 100
        T = float(self.years_ent.get())
        N = float(self.compounding_ent.get())

        compound = ((R / N + 1) ** (T * N)) * P
        self.answerLbl["text"] = ("Compounding: $%.2f" % (compound))

    def simple_interest(self):
        P = float(self.principal_ent.get())
        R = float(self.annualInt_ent.get())
        R /= 100
        T = float(self.years_ent.get())
        simple = ((R * T) + 1) * P
        self.answerLbl["text"] = ("Simple: $%.2f" % (simple))


root = Tk()
root.title("Interest Calculator")
app = Application(root)
app.configure(bg="#373534")
root.mainloop()
