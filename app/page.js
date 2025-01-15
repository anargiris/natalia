"use client";

import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function PsychologistLandingPage() {
  const [activeTab, setActiveTab] = useState("Βιογραφικό");

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="relative h-[30vh] lg:h-[40vh] overflow-hidden">
        <Image
          src="/bg-photo.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/70 to-purple-200/90 opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-4 lg:p-8 w-full">
          <div className="container mx-auto py-8 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center">
            <div className=" text-zinc-800 text-left">
              <h1 className="text-4xl lg:text-7xl font-bold mb-6">
                Ναταλία Παπουλάκη
              </h1>
              <p className="text-2xl lg:text-5xl font-medium lg:mb-2">
                Κλινική Ψυχολόγος
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 pb-4 xl:px-0 mx-auto mt-6 lg:mt-12 bg-zinc-50 leading-9 relative ">
        <Tabs
          defaultValue="Βιογραφικό"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-3 items-center">
            {["Βιογραφικό", "Υπηρεσίες", "Επικοινωνία"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={`relative transition-all duration-150 ease-in-out py-2.5 hover:bg-blue-100 `}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10  border-b border-blue-500 "
                    style={{ borderRadius: "inherit" }}
                    transition={{ type: "spring", bounce: 0, duration: 0.7 }}
                  />
                )}{" "}
                <span className="relative z-20 text-base lg:text-2xl font-medium">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="Βιογραφικό" className="mt-8 px-1.5 lg:px-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-zinc-700 text-lg lg:text-2xl !leading-relaxed">
                Η Ναταλία Παπουλάκη είναι Κλινική Ψυχολόγος. Αποφοίτησε από το
                Τμήμα Ψυχολογίας του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης
                και ολοκλήρωσε μεταπτυχιακές σπουδές στη Κλινική Ψυχολογία στο
                ίδιο Τμήμα. Έχει πραγματοποιήσει κλινική άσκηση στη Β’
                Πανεπιστημιακή Κλινική του Ψυχιατρικού Νοσοκομείου Θεσσαλονίκης
                και στο Εργαστήριο Εφαρμοσμένης Ψυχολογίας (Ε.ΕΦΑ.Ψ) του
                Αριστοτελείου Πανεπιστήμιου. Στο πλαίσιο συνεχούς κατάρτισης και
                εξειδίκευσης, παρακολουθεί το πρόγραμμα μετεκπαίδευσης και
                ομάδων εποπτείας του Ινστιτούτου Ψυχολογίας και Υγείας,
                εστιάζοντας στην ψυχοδυναμική πρακτική. <br />
                <br />
                Διαθέτει κλινική εμπειρία παρέχοντας ατομικές συνεδρίες
                ψυχοδυναμικής ψυχοθεραπείας σε ιδιωτικό πλαίσιο. Επιπλέον, έχει
                εργαστεί στο Κέντρο Συμβουλευτικής και Ψυχολογικής Υποστήριξης
                (ΚΕ.ΣΥ.Ψ.Υ) του Αριστοτελείου Πανεπιστημίου, προσφέροντας
                συμβουλευτικές υπηρεσίες σε φοιτητές/τριες. Υπήρξε Επιστημονική
                Συνεργάτιδα του Εργαστηρίου Εφαρμοσμένης Ψυχολογίας του
                Αριστοτελείου Πανεπιστημίου, παρέχοντας ψυχοθεραπευτικές
                συνεδρίες.
              </p>
            </motion.div>
          </TabsContent>
          <TabsContent value="Υπηρεσίες" className="mt-8 px-1 lg:px-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col gap-4 mb-8">
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-800">
                  Ψυχοθεραπεία Ενηλίκων
                </h3>
                <p className="text-zinc-700 text-base lg:text-2xl tracking-wide">
                  Η ψυχοθεραπεία αφορά την αναζήτηση βοήθειας για ένα ευρύ φάσμα
                  δυσκολιών, όπως το άγχος, οι αλλαγές στη διάθεση, ο ύπνος, το
                  φαγητό, τα ζητήματα σχέσεων, θέματα υγείας, σημαντικές αλλαγές
                  στη ζωή ή έλλειψη ικανοποίησης από τη ζωή. Πρόκειται για μια
                  διαδικασία εξερεύνησης και κατανόησης σκέψεων, συναισθημάτων
                  και εμπειριών, που μπορεί να μην είναι εύκολα ορατά ή
                  συνειδητά. Μέσα σε μια σχέση εμπιστοσύνης και σεβασμού το
                  άτομο μπορεί να εκφραστεί ελεύθερα, να επεξεργαστεί την
                  προσωπική του ιστορία, να βιώσει βαθύτερα συναισθήματα και να
                  επιλέξει αποτελεσματικότερους τρόπους διαχείρισης. Είναι μια
                  μακροχρόνια διαδικασία, που βοηθά στη μείωση των συμπτωμάτων
                  και των δυσκολιών, που οδήγησαν αρχικά στην αναζήτηση
                  βοήθειας, αλλά σταδιακά δίνει την ευκαιρία να κατανοήσουμε πιο
                  ολοκληρωμένα τον εαυτό μας και τον τρόπο που λειτουργούμε στις
                  σχέσεις με τους άλλους ανθρώπους.
                </p>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 ">
                  Συμβουλευτική Ενηλίκων{" "}
                </h3>
                <p className="text-zinc-700 text-base lg:text-2xl tracking-wide">
                  Η συμβουλευτική αφορά μια σύντομη διαδικασία για τη διαχείριση
                  συγκεκριμένων προβλημάτων και κρίσεων του παρόντος. Παρέχεται
                  ένα ασφαλές και υποστηρικτικό περιβάλλον για την κατανόηση
                  ενός ζητήματος και την καθοδήγηση στη λήψη αποφάσεων.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2">
                  Δια ζώσης ή διαδικτυακές συνεδρίες
                </h3>
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="Επικοινωνία" className="mt-8 px-4 lg:px-0">
            <div className="flex items-center gap-4 mb-8">
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>phone-call</title>
                <path d="M18.037 6.635c-0.011-0.001-0.023-0.001-0.035-0.001-0.414 0-0.75 0.336-0.75 0.75 0 0.399 0.312 0.726 0.706 0.749l0.002 0c3.533 0.231 6.311 3.153 6.311 6.723 0 0.186-0.008 0.37-0.022 0.552l0.002-0.024c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.009-0.143 0.014-0.31 0.014-0.479 0-4.38-3.397-7.967-7.7-8.269l-0.026-0.001zM17.963 2.749c0.449 0.022 10.998 0.688 10.998 12.635 0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.015-0.238 0.024-0.515 0.024-0.795 0-7.059-5.471-12.841-12.405-13.335l-0.043-0.002c-0.009-0-0.019-0.001-0.029-0.001-0.403 0-0.732 0.314-0.757 0.71l-0 0.002c-0.001 0.011-0.001 0.024-0.001 0.037 0 0.401 0.315 0.729 0.711 0.749l0.002 0zM30.637 23.15c-0.109-0.675-0.334-1.281-0.654-1.823l0.013 0.024c-0.114-0.186-0.301-0.317-0.521-0.353l-0.004-0.001-8.969-1.424c-0.035-0.006-0.076-0.009-0.117-0.009-0.207 0-0.395 0.083-0.531 0.218l0-0c-0.676 0.68-1.194 1.516-1.496 2.451l-0.012 0.044c-4.016-1.64-7.141-4.765-8.742-8.675l-0.038-0.105c0.978-0.314 1.814-0.833 2.493-1.509l-0 0c0.136-0.136 0.22-0.324 0.22-0.531 0-0.041-0.003-0.081-0.010-0.12l0.001 0.004-1.425-8.969c-0.036-0.224-0.167-0.412-0.35-0.524l-0.003-0.002c-0.505-0.301-1.094-0.522-1.724-0.626l-0.029-0.004c-0.315-0.070-0.677-0.111-1.048-0.111-0.025 0-0.050 0-0.075 0.001l0.004-0h-0.006c-3.497 0.024-6.326 2.855-6.347 6.351v0.002c0.015 12.761 10.355 23.102 23.115 23.117h0.002c3.5-0.023 6.331-2.854 6.354-6.351v-0.002c0-0.020 0-0.044 0-0.068 0-0.356-0.036-0.703-0.106-1.038l0.006 0.033zM24.383 29.076c-11.933-0.014-21.602-9.684-21.616-21.616v-0.001c0.019-2.673 2.182-4.835 4.854-4.853h0.002c0.016-0 0.036-0 0.055-0 0.272 0 0.537 0.030 0.793 0.086l-0.024-0.005c0.366 0.060 0.695 0.161 1.003 0.3l-0.025-0.010 1.302 8.202c-0.628 0.528-1.404 0.901-2.257 1.050l-0.029 0.004c-0.355 0.064-0.62 0.37-0.62 0.739 0 0.088 0.015 0.172 0.043 0.25l-0.002-0.005c1.772 5.072 5.695 8.994 10.646 10.729l0.121 0.037c0.073 0.026 0.157 0.041 0.245 0.041 0.368 0 0.674-0.265 0.737-0.615l0.001-0.005c0.153-0.882 0.526-1.658 1.061-2.295l-0.006 0.007 8.201 1.303c0.133 0.294 0.237 0.636 0.296 0.994l0.003 0.024c0.046 0.219 0.073 0.471 0.073 0.729 0 0.018-0 0.035-0 0.053l0-0.003c-0.016 2.675-2.179 4.84-4.852 4.859h-0.002z"></path>
              </svg>
              <a
                className="text-lg lg:text-2xl font-medium"
                href="tel:6980417839"
              >
                6980417839
              </a>
            </div>

            <div className="flex items-center gap-4">
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                  fillRule="evenodd"
                />
              </svg>
              <a
                className="text-lg lg:text-2xl font-medium"
                href="mailto:natalia.papoulaki@gmail.com"
              >
                natalia.papoulaki@gmail.com
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
